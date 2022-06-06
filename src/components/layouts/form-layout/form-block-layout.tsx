import React, { FC } from 'react';
import { FormBlockLayoutProps } from 'src/models/props/form';
import styles from './form-block-layout.module.scss';
import { Typography } from '@mui/material';

const FormBlockLayout: FC<FormBlockLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <Typography variant="h5">{title}</Typography>
      {children}
    </div>
  );
};

export default FormBlockLayout;
