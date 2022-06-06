import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProperty } from 'src/rtk/features/property';
import { useAppDispatch, useAppSelector } from 'src/rtk/hooks';
import PropertyPageDetails from './property-page-details/property-page-details';
import PropertyPageDescription from './property-page-description/property-page-description';
import Loader from 'src/components/common/loader/loader';

const PropertyPage = () => {
  const dispatch = useAppDispatch();
  const {property, isLoading} = useAppSelector(state => state.property);
  const {id} = useParams();

  useEffect(() => {
    id && dispatch(fetchProperty(id));
  }, []);

  return <div data-testid="property-page">
    {
      isLoading
        ? <Loader/>
        : (
          <div >
            <PropertyPageDetails {...property} />
            <PropertyPageDescription {...property}/>
          </div>
        )
    }
  </div>;
};

export default PropertyPage;
