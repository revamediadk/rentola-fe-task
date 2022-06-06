import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from '../common/logo/logo';
import Button from '../common/button/button';
import styles from './header.module.scss';
import { openModal } from '../../rtk/features/modal';
import { useAppDispatch } from '../../rtk/hooks';
import { ModalTypes } from '../../models/modal';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleClickBtn = () => {
    dispatch(openModal(ModalTypes.ADD_LISTING));
  };

  return (
    <AppBar position="sticky" className={styles.header}>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Logo/>
          <Button label="Add listing" onClick={handleClickBtn} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
