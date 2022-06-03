/* eslint-disable @typescript-eslint/no-var-requires */
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const tpl = `
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import <%=name%> from '../src/<%=name%>';

const title = '<%=name%>';

describe('<%=name%> test groups', () => {
    test('render', () => {
      render(<<%=name%> title="<%=name%>"/>);
      const el = screen.getByTitle('<%=name%>');
      expect(el).toBeDefined();
    });
});
`;

fs.readdirSync(path.resolve(__dirname, './src')).forEach((file) => {
  const filePath = path.resolve(__dirname, './src', file);
  const stat = fs.lstatSync(filePath);
  if (stat.isFile() && /^[A-Z]/.test(file)) {
    const name = file.split('.')[0];
    const testPath = path.resolve(__dirname, './test', name + '.test.tsx');
    if (!fs.existsSync(testPath)) {
      fs.writeFileSync(testPath, ejs.render(tpl, { name }));
    }
  }
});
