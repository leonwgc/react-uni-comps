module.exports = [
  {
    title: '基础组件',
    path: 'base',
    comps: [
      {
        name: 'Button',
        title: 'Button 按钮',
      },
      {
        name: 'Divider',
        title: 'Divider 分割线',
      },

      {
        name: 'HairLineBox',
        title: 'HairLineBox 一像素边框容器',
      },
      {
        name: 'Avatar',
        title: 'Avatar 头像',
      },
      {
        name: 'Icon',
        title: 'Icon 图标',
      },
    ],
  },
  {
    title: '操作反馈',
    path: 'feedback',
    comps: [
      {
        name: 'WaitLoading',
        title: 'WaitLoading (防闪烁)',
      },
      {
        name: 'Spin',
        title: 'Spin 加载中',
      },
      {
        name: 'Modal',
        title: 'Modal 弹框',
        mobile: false,
      },
      {
        name: 'Drawer',
        title: 'Drawer 抽屉',
        mobile: false,
      },
      {
        name: 'AlertDialog',
        title: 'AlertDialog alert/confirm弹框',
      },
      {
        name: 'Tooltip',
        title: 'Tooltip 提示',
      },
      {
        name: 'Pullup',
        title: 'Pullup 上拉加载/下拉刷新',
      },
      {
        name: 'Toast',
        title: 'Toast 提示',
      },
      {
        name: 'PopConfirm',
        title: 'PopConfirm 气泡确认框',
        mobile: false,
      },

      {
        name: 'Notify',
        title: 'Notify 顶部消息通知',
      },
      {
        name: 'Popover',
        title: 'Popover 带箭头的浮层',
        mobile: false,
      },
      {
        name: 'Drag',
        title: 'Drag 拖拽',
        mobile: false,
      },

      {
        name: 'ActionSheet',
        title: 'ActionSheet 动作面板',
      },

      {
        name: 'Skeleton',
        title: 'Skeleton 骨架屏',
      },
      {
        name: 'CopyToClipboard',
        title: 'CopyToClipboard 复制',
      },

      {
        name: 'FingerGestureElement',
        title: 'FingerGestureElement 手势',
      },
    ],
  },
  {
    title: '导航组件',
    path: 'nav',
    comps: [
      {
        name: 'Tabs',
        title: 'Tabs 选项卡',
      },
      {
        name: 'Affix',
        title: 'Affix 固钉',
      },
      {
        name: 'Steps',
        title: 'Steps 步骤条',
      },
      {
        name: 'PopMenu',
        title: 'PopMenu 弹出菜单',
        mobile: false,
      },
    ],
  },
  {
    title: '数据录入',
    path: 'data',
    comps: [
      {
        name: 'Checkbox',
        title: 'Checkbox 复选框',
      },
      {
        name: 'CheckboxGroup',
        title: 'CheckboxGroup 复选框列表',
      },
      {
        name: 'Radio',
        title: 'Radio 单选框',
      },
      {
        name: 'RadioGroup',
        title: 'RadioGroup 单选框列表',
      },
      {
        name: 'Input',
        title: 'Input 输入框',
      },
      {
        name: 'Switch',
        title: 'Switch 开关',
      },
      {
        name: 'PasswordInput',
        title: 'PasswordInput 自定义密码输入框',
      },
      {
        name: 'NumberKeyboard',
        title: 'NumberKeyboard 数字键盘',
      },
      {
        name: 'Picker',
        title: 'Picker 弹出选择器',
      },
      {
        name: 'PickerView',
        title: 'PickerView 平铺选择器',
      },
      {
        name: 'Rate',
        title: 'Rate 评分',
      },
      {
        name: 'IndexList',
        title: 'IndexList 索引列表',
      },
      {
        name: 'FileInputTrigger',
        title: 'FileInputTrigger 图片文件上传',
      },
      {
        name: 'Signature',
        title: 'Signature 手写签名',
      },
      {
        name: 'DatePicker',
        title: 'DatePicker 移动端日期选择',
      },
      {
        name: 'Calendar',
        title: 'Calendar 移动端日历',
      },
    ],
  },
  {
    title: '数据展示',
    path: 'display',
    comps: [
      {
        name: 'Cell',
        title: 'Cell 列表项',
      },
      {
        name: 'Badge',
        title: 'Badge 徽标',
      },
      {
        name: 'WaterMark',
        title: 'WaterMark 水印',
      },
      {
        name: 'Text',
        title: 'Text 文本省略',
      },
      {
        name: 'ImageViewer',
        title: 'ImageViewer 图片查看',
      },

      {
        name: 'QRCode',
        title: 'QRCode 二维码',
      },
      {
        name: 'ProgressBar',
        title: 'ProgressBar 进度条',
      },
      {
        name: 'ProgressCircle',
        title: 'ProgressCircle 环形进度条',
      },
      {
        name: 'Collapse',
        title: 'Collapse 折叠面板',
      },
      {
        name: 'Slide',
        title: 'Slide 轮播/幻灯片',
      },

      {
        name: 'NoticeBar',
        title: 'NoticeBar 水平通知栏',
      },
      {
        name: 'NoticeList',
        title: 'NoticeList 垂直通知栏',
      },
    ],
  },
  {
    title: '动画',
    path: 'animation',
    comps: [
      {
        name: 'TransitionElement',
        title: 'Transition动画',
      },
      {
        name: 'AnimationElement',
        title: 'Animation动画',
      },
    ],
  },
];
