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
    path: '/Slide',
    component: lazy(() => import('./Slide')),
  },
  {
    path: '/SlideFull',
    component: lazy(() => import('./SlideFull')),
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
];

export default routes;
