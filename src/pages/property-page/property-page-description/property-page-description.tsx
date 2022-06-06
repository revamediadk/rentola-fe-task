import React, { FC } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { PropertyItemType } from 'src/models/properties';
import styles from './property-page-description.module.scss';

const PropertyPageDescription: FC<PropertyItemType> = (
  {
    city,
    address,
    summary
  }
) => {
  return (
    <Box className={styles.box}>
      <Typography variant="h4" component="h4">
        {`${city}, ${address}`}
      </Typography>
      <Divider />
      <Typography>
        {summary}
      </Typography>
    </Box>
  );
};

export default PropertyPageDescription;
