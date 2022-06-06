import React, { FC, memo } from 'react';
import { CardContent } from '@mui/material';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { PropertyDetailProps, PropertyDetailsProps } from 'src/models/props/properties';
import PropertyDetail from './property-detail/property-detail';
import styles from './property-details.module.scss';

const PropertyDetails: FC<PropertyDetailsProps> = ({bathrooms, bedrooms, type}) => {
  const details: PropertyDetailProps[] = [
    {
      icon: <BathtubOutlinedIcon/>,
      value: bathrooms || '-',
      label: 'Bathrooms'
    }, {
      icon: <BedOutlinedIcon/>,
      value: bedrooms,
      label: 'Bedrooms'
    }, {
      icon: <HomeOutlinedIcon/>,
      value: type,
      label: 'Type'
    },
  ];

  return (
    <CardContent className={styles.details}>
      {details.map(detail => <PropertyDetail {...detail} key={detail.label}/>)}
    </CardContent>
  );
};

export default memo(PropertyDetails);
