import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div>
      <CircularProgress className={styles.loader}/>
    </div>
  );
};

export default Loader;
