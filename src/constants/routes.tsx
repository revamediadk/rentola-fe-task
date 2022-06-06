import { ROUTES, RouteType } from '../models/routes';
import PropertyPage from '../pages/property-page/property-page';
import PageNotFound from '../pages/page-not-found/page-not-found';

export const propertyUrl = (id: string) => `/properties/${id}`;

export const routers: RouteType[] = [
  {
    path: ROUTES.PROPERTY,
    component: <PropertyPage/>,
  }, {
    path: ROUTES.PAGE_NOT_FOUND,
    component: <PageNotFound/>
  }
];
