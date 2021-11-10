import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./All')),
  },
  {
    path: '/TransitionElement',
    component: lazy(() => import('./Transition')),
  },
  {
    path: '/AnimationElement',
    component: lazy(() => import('./Animation')),
  },
  {
    path: '/LazyloadImage',
    component: lazy(() => import('./LazyloadImage')),
  },
  {
    path: '/LazyLoadElement',
    component: lazy(() => import('./LazyLoadElement')),
  },
  {
    path: '/Pullup',
    component: lazy(() => import('./Pullup')),
  },
  {
    path: '/PullupDom',
    component: lazy(() => import('./PullupDom')),
  },
  {
    path: '/Popup',
    component: lazy(() => import('./Popup')),
  },
  {
    path: '/Tab',
    component: lazy(() => import('./Tab')),
  },
  {
    path: '/Skeleton',
    component: lazy(() => import('./SkeletonDemo')),
  },
  {
    path: '/Checkbox',
    component: lazy(() => import('./Checkbox')),
  },
  {
    path: '/Cell',
    component: lazy(() => import('./Cell')),
  },
  {
    path: '/Button',
    component: lazy(() => import('./Button')),
  },
  {
    path: '/Spinner',
    component: lazy(() => import('./Spinner')),
  },
  {
    path: '/Switch',
    component: lazy(() => import('./Switch')),
  },
  {
    path: '/ErrorBoudary',
    component: lazy(() => import('./ErrorBoudary')),
  },
  {
    path: '/Divider',
    component: lazy(() => import('./Divider')),
  },
  {
    path: '/ImageUpload',
    component: lazy(() => import('./ImageUpload')),
  },
  {
    path: '/Waypoint',
    component: lazy(() => import('./Waypoint')),
  },
  {
    path: '/IndexList',
    component: lazy(() => import('./IndexList')),
  },
  {
    path: '/Popover',
    component: lazy(() => import('./Popover')),
  },
  {
    path: '/Drag',
    component: lazy(() => import('./Drag')),
  },
  {
    path: '/CopyToClipboard',
    component: lazy(() => import('./CopyToClipboard')),
  },
  {
    path: '/Text',
    component: lazy(() => import('./Text')),
  },
  {
    path: '/Tooltip',
    component: lazy(() => import('./Tooltip')),
  },
  {
    path: '/Toast',
    component: lazy(() => import('./Toast')),
  },
  {
    path: '/Icon',
    component: lazy(() => import('./Icon')),
  },
  {
    path: '/NoticeBar',
    component: lazy(() => import('./NoticeBar')),
  },
  {
    path: '/Affix',
    component: lazy(() => import('./Affix')),
  },
  {
    path: '/ActionSheet',
    component: lazy(() => import('./ActionSheet')),
  },
  {
    path: '/AlertDialog',
    component: lazy(() => import('./AlertDialog')),
  },
  {
    path: '/PasswordInput',
    component: lazy(() => import('./PasswordInput')),
  },
  {
    path: '/NumberKeyboard',
    component: lazy(() => import('./NumberKeyboard')),
  },
  {
    path: '/FingerGestureElement',
    component: lazy(() => import('./FingerGestureElement')),
  },
  {
    path: '/HairLineBox',
    component: lazy(() => import('./HairLineBox')),
  },
  {
    path: '/SwipeAction',
    component: lazy(() => import('./SwipeAction')),
  },
  {
    path: '/Input',
    component: lazy(() => import('./Input')),
  },
  {
    path: '/Picker',
    component: lazy(() => import('./Picker')),
  },
  {
    path: '/Steps',
    component: lazy(() => import('./Steps')),
  },
  {
    path: '/Signature',
    component: lazy(() => import('./Signature')),
  },
  {
    path: '/SignatureLandscape',
    component: lazy(() => import('./SignatureLandscape')),
  },
  {
    path: '/Rate',
    component: lazy(() => import('./Rate')),
  },
  {
    path: '/NoticeList',
    component: lazy(() => import('./NoticeList')),
  },
  {
    path: '/Slide',
    component: lazy(() => import('./Slide')),
  },
  {
    path: '/SlideFullPage',
    component: lazy(() => import('./SlideFullPage')),
  },
  {
    path: '/ProgressCircle',
    component: lazy(() => import('./ProgressCircle')),
  },
  {
    path: '/WaterMark',
    component: lazy(() => import('./WaterMark')),
  },
  {
    path: '/CheckboxGroup',
    component: lazy(() => import('./CheckboxGroup')),
  },
  {
    path: '/Radio',
    component: lazy(() => import('./Radio')),
  },
  {
    path: '/RadioGroup',
    component: lazy(() => import('./RadioGroup')),
  },
  {
    path: '/Notify',
    component: lazy(() => import('./Notify')),
  },
  {
    path: '/Badge',
    component: lazy(() => import('./Badge')),
  },
  {
    path: '/Avatar',
    component: lazy(() => import('./Avatar')),
  },
  {
    path: '/ImageViewer',
    component: lazy(() => import('./ImageViewer')),
  },
  {
    path: '/Calendar',
    component: lazy(() => import('./Calendar')),
  },
  {
    path: '/DatePicker',
    component: lazy(() => import('./DatePicker')),
  },
  {
    path: '/Drawer',
    component: lazy(() => import('./Drawer')),
  },
  {
    path: '/Modal',
    component: lazy(() => import('./Modal')),
  },
  {
    path: '/PopMenu',
    component: lazy(() => import('./PopMenu')),
  },
  {
    path: '/PopConfirm',
    component: lazy(() => import('./PopConfirm')),
  },
];

export default routes;
