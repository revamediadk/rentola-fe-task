import React, { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PropertyItemType } from 'src/models/properties';
import styles from './property-page-details.module.scss';
import Map from 'src/components/map/map';
import { PROPERTY_PAGE_IMAGE_SIZE } from 'src/constants';
import Slider from 'src/components/slider/slider';

const PropertyPageDetails: FC<PropertyItemType> = (
  {
    image,
    city,
    bathrooms,
    bedrooms,
    address,
    type,
    area,
    isVerified,
    caseNumber,
    location
  }
) => {
  return (
    <Box className={styles.box}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <Slider images={image} size={PROPERTY_PAGE_IMAGE_SIZE} withPreview/>
        </div>

        <div className={styles.text}>
          <Typography component="h1" variant="h4" className={styles.title}>
            <span>{type}</span> of {area}m<sup>2</sup> in {city}
          </Typography>
          <Typography className={styles.address}>
            {address}
          </Typography>

          <Divider/>

          <div className={styles.detail}>
            <p className={styles.label}>Area:</p>
            <p>{area} m<sup>2</sup></p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Bedrooms:</p>
            <p>{bedrooms} bedrooms</p>

          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Bathrooms:</p>
            <p>{bathrooms} bathrooms</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Property type:</p>
            <p>{type}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Verified by Rentola:</p>
            <p>{isVerified ? <CheckCircleIcon className={styles.icon}/> : 'No'}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Case number:</p>
            <p>{caseNumber}</p>
          </div>
        </div>
      </div>
      <Map lat={location.latitude} lng={location.longitude}/>
    </Box>
  );
};

export default PropertyPageDetails;
