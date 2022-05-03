/* eslint-disable @typescript-eslint/no-var-requires */
const ejs = require('ejs');
const data = require('./doc-data');
const path = require('path');
const fs = require('fs');

const tpl = `---
title: <%= title %>
order: <%= order %>
mobile: <%= mobile %>
group:
  title: <%= groupTitle %>
  order: <%= groupOrder %>
  path: <%= groupPath %>
---

<code src="../demo/<%= name %>.tsx"></code>
<API src="../src/<%= name %>.tsx"></API>
`;

const tpl1 = `---
title: <%= title %>
order: <%= order %>
group:
  title: <%= groupTitle %>
  order: <%= groupOrder %>
  path: <%= groupPath %>
---


\`\`\`jsx



// <%= desc %>



\`\`\`
`;

data.map((group, idx) => {
  handle(group, idx, Array.isArray(group.comps) ? 'comps' : 'list');
});

function handle(group, idx, listProp = 'comps') {
  const list = group[listProp];
  const isComps = listProp === 'comps';
  if (Array.isArray(list))
    list.map((item, subIdx) => {
      item.order = subIdx;
      item.groupOrder = idx;
      item.groupPath = group.path;
      item.groupTitle = group.title;
      item.mobile = typeof item.mobile === 'boolean' ? item.mobile : true;

      const fileName = path.resolve(__dirname, `./mdx/${item.name}.md`);

      if (fs.existsSync(fileName)) {
        if (isComps) {
          fs.unlinkSync(fileName);
        } else {
          return;
        }
      }

      fs.writeFileSync(
        path.resolve(__dirname, `./mdx/${item.name}.md`),
        ejs.render(isComps ? tpl : tpl1, item)
      );
    });
}
