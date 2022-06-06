import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '../../components/common/button/button';
import { ROUTES } from '../../models/routes';
import { ButtonType } from '../../models/button';
import styles from './page-not-found.module.scss';

const PageNotFound = () => {
  const navigation = useNavigate();
  const goToHome = () => navigation(ROUTES.LIST);

  return (
    <Box className={styles.page}>
      <Typography variant="h2">Page not found</Typography>
      <Button label="Back to home" variant={ButtonType.OUTLINED} onClick={goToHome} />
    </Box>
  );
};

export default PageNotFound;
