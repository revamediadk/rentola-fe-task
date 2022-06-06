import Card from '@mui/material/Card';
import { FC, memo, useMemo } from 'react';
import { PropertyItemType } from 'src/models/properties';
import PropertyDetails from './property-details/property-details';
import PropertyAction from './property-action/property-action';
import PropertyPreview from './property-preview/property-preview';
import { propertyUrl } from '../../constants/routes';

interface PropertyProps extends PropertyItemType {
}

const Property: FC<PropertyProps> = (
  {
    id,
    image,
    city,
    price,
    bathrooms,
    bedrooms,
    type
  }
) => {
  const link = useMemo(() => propertyUrl(id), []);

  return (
    <Card>
      <PropertyPreview link={link} images={image} city={city}/>
      <PropertyDetails bathrooms={bathrooms} bedrooms={bedrooms} type={type}/>
      <PropertyAction price={price} link={link}/>
    </Card>
  );
};

export default memo(Property);
