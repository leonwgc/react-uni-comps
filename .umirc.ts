import { defineConfig } from 'dumi';

const repo = 'react-uni-comps';

const logo =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

export default defineConfig({
  title: repo,
  favicon: logo,
  logo: logo,
  outputPath: 'docs',
  mode: 'doc',
  resolve: {
    includes: ['mdx'],
  },
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
  },
  hash: true,
  webpack5: {},
  fastRefresh: {},
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  styles: [
    `
    #root .__dumi-default-menu-header p {
      display:none;
    }
    #root .__dumi-default-menu-header h1 {
      font-size: 24px;
      margin: 16px auto;
    }

    #root .__dumi-default-mobile-demo-layout{
      padding:0;
    }

    #root .__dumi-default-mobile-content{
      display:flex;
    }

    #root .__dumi-default-menu-inner .__dumi-default-menu-mobile-area{
      display:none;
    }

    #root .__dumi-default-menu-header{
      padding-top: 10px;
    }

    #root .__dumi-default-menu-logo{
      display:none;
    }

    .__dumi-default-device[data-device-type="none"] {
      display: none;
    }

      .__dumi-default-device {
        width: 310px !important;
        min-width: 375px;
        height: 624px;
        box-shadow: 0 0 0 12.6px #090a0d, 0 0 0 14.4px #9fa3a8, 0 4px 20px 14.4px rgba(0, 0, 0, 0.1);
      }
    
    `,
  ],
  themeConfig: {
    carrier: 'ruc',
    hd: {
      // 禁用高清方案
      rules: [],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
});
