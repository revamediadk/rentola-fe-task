import React, { FC } from 'react';
import { PropertyDetailProps } from 'src/models/props/properties';
import styles from './property-detail.module.scss';

const PropertyDetail: FC<PropertyDetailProps> = ({label, value, icon}) => {
  return (
    <div className={styles.detail}>
      {icon}
      <p className={styles.label}>{label}:</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default PropertyDetail;
