import React, { FC } from 'react';
import { Modal, Card } from '@mui/material';
import { ModalProps } from 'src/models/props/modal';
import Cancel from '../../common/cancel/cancel';
import styles from './modal-layout.module.scss';

const ModalLayout: FC<ModalProps> = (props) => {
  const { children, title, onClose, ...otherProps } = props;

  return (
    <Modal {...otherProps} onClose={onClose} >
      <Card className={styles.card}>
        <Cancel onClick={onClose} className={styles.cancel}/>
        {children}
      </Card>
    </Modal>
  );
};

export default ModalLayout;
