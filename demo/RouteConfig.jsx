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
  {
    path: '/spinner',
    component: lazy(() => import('./Spinner')),
  },
  {
    path: '/switch',
    component: lazy(() => import('./Switch')),
  },
  {
    path: '/errorBoudary',
    component: lazy(() => import('./ErrorBoudary')),
  },
  {
    path: '/divider',
    component: lazy(() => import('./Divider')),
  },
  {
    path: '/upload',
    component: lazy(() => import('./Upload')),
  },
  {
    path: '/waypoint',
    component: lazy(() => import('./Waypoint')),
  },
];

export default routes;
