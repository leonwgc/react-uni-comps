/* eslint-disable @typescript-eslint/no-var-requires */
const ejs = require('ejs');
const data = require('./doc-data');
const path = require('path');
const fs = require('fs');

const tpl = `---
title: <%= title %>
order: <%= order %>
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

    const fileName = path.resolve(__dirname, `./docs/${item.name}.md`);

    if (fs.existsSync(fileName)) {
      fs.unlinkSync(fileName);
    }

    fs.writeFileSync(path.resolve(__dirname, `./docs/${item.name}.md`), ejs.render(tpl, item));
  });
});
