import { ReactNode } from 'react';

export enum ROUTES {
  LIST = '/',
  PROPERTY = '/properties/:id',
  PAGE_NOT_FOUND = '/404'
}

export type RouteType = {
  path: ROUTES,
  component: ReactNode
}
