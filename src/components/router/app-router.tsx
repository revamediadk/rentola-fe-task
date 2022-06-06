import React from 'react';
import Layout from '../layouts/layout/layout';
import PageNotFound from 'src/pages/page-not-found/page-not-found';
import { ROUTES } from 'src/models/routes';
import ListProperties from 'src/pages/list-property/list-properties';
import PropertyPage from 'src/pages/property-page/property-page';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path={ROUTES.LIST} element={<ListProperties/>}>
          <Route path={ROUTES.PROPERTY} element={<PropertyPage/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default AppRouter;
