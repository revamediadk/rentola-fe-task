import React, { memo, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'src/rtk/hooks';
import { fetchProperties } from 'src/rtk/features/properties/action';
import Property from 'src/components/property/property';
import Loader from 'src/components/common/loader/loader';
import Empty from 'src/components/common/empty/empty';
import ListPropertyFilter from './list-property-filter/list-property-filter';
import { getPropertiesState } from 'src/rtk/features/properties/selectors';

const ListProperties = () => {
  const dispatch = useAppDispatch();
  const { isLoading, filteredProperties} = useAppSelector(getPropertiesState);
  const isEmpty = useMemo(() => !filteredProperties.length, [ filteredProperties ]);

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  return (
    <div>
      <ListPropertyFilter />

      <Grid container rowSpacing={2} columnSpacing={2}>
        {isLoading && <Grid item xs={12}><Loader/></Grid>}
        {filteredProperties.map(property => (
          <Grid item xs={6} sm={4} md={3} key={property.id}>
            <Property {...property}/>
          </Grid>))}
        {isEmpty && !isLoading && <Grid item xs={12}><Empty text="No result"/></Grid>}
      </Grid>
    </div>
  );
};

export default memo(ListProperties);
