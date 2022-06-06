import React from 'react';
import { EmptyProps } from 'src/models/props/empty';
import { Box } from '@mui/material';
import styles from './empty.module.scss';

function Empty({ text }: EmptyProps)  {
  return (
    <Box className={styles.empty} data-testid="empty-item">{text}</Box>
  );
}

export default Empty;
