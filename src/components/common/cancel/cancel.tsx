import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import { Cancel as MuiCancel } from '@mui/icons-material';
import styles from './cancel.module.scss';
import classNames from 'classnames';

interface CancelProps {
  onClick: () => void;
  className?: string;
}

const Cancel: FC<CancelProps> = ({onClick, className}) => {
  return (
    <IconButton onClick={onClick} className={classNames({[className!]: className})}>
      <MuiCancel className={styles.cancel}/>
    </IconButton>
  );
};

export default Cancel;
