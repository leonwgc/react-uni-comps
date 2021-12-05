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

<code src="../demo/<%= name %>.jsx"></code>
<API src="../src/<%= name %>.tsx"></API>
`;

data.map((group, idx) => {
  group.comps.map((item, subIdx) => {
    item.order = subIdx;
    item.groupOrder = idx;
    item.groupPath = group.path;
    item.groupTitle = group.title;
    item.mobile = typeof item.mobile === 'boolean' ? item.mobile : true;

    const fileName = path.resolve(__dirname, `./mdx/${item.name}.md`);

    if (fs.existsSync(fileName)) {
      fs.unlinkSync(fileName);
    }

    fs.writeFileSync(path.resolve(__dirname, `./mdx/${item.name}.md`), ejs.render(tpl, item));
  });
});
