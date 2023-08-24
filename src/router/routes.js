import { lazy } from 'react';
import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '知乎日报 | webapp',
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('../views/Detail')),
    meta: {
      title: '知乎日报 | detail',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('../views/Login')),
    meta: {
      title: '知乎日报 | login',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('../views/Personal')),
    meta: {
      title: '知乎日报 | personal',
    },
  },
  {
    path: '/store',
    name: 'store',
    component: lazy(() => import('../views/Store')),
    meta: {
      title: '知乎日报 | store',
    },
  },
  {
    path: '/update',
    name: 'update',
    component: lazy(() => import('../views/Update')),
    meta: {
      title: '知乎日报 | update',
    },
  },
  {
    path: '*',
    name: '404',
    component: lazy(() => import('../views/Page404')),
    meta: {
      title: '知乎日报 | 404',
    },
  },
];

export default routes;
