import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ROUTES } from 'src/models/routes';
import { logoIcon } from 'src/assets';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link to={ROUTES.LIST} data-testid="main-link" className={styles.link}>
      <img src={logoIcon} alt="Main page" className={styles.logo} />
      <Typography className={styles.text}>
        FE - TASK
      </Typography>
    </Link>
  );
};

export default Logo;
