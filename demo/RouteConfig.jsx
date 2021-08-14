import { lazy } from 'react';

const routes = [
  {
    path: '/transition',
    component: lazy(() => import('./Transition')),
  },
  {
    path: '/animation',
    component: lazy(() => import('./Animation')),
  },
  {
    path: '/images',
    component: lazy(() => import('./LazyloadImage')),
  },
  {
    path: '/LazyLoadElement',
    component: lazy(() => import('./LazyLoadElement')),
  },
  {
    path: '/pullup',
    component: lazy(() => import('./Pullup')),
  },
  {
    path: '/popup',
    component: lazy(() => import('./Popup')),
  },
  {
    path: '/tab',
    component: lazy(() => import('./Tab')),
  },
  {
    path: '/ske',
    component: lazy(() => import('./SkeletonDemo')),
  },
  {
    path: '/checkbox',
    component: lazy(() => import('./Checkbox')),
  },
  {
    path: '/cell',
    component: lazy(() => import('./Cell')),
  },
  {
    path: '/button',
    component: lazy(() => import('./Button')),
  },
];

export default routes;
