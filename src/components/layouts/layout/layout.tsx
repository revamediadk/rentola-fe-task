import React from 'react';
import Header from '../../header/header';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import styles from './layout.module.scss';
import Footer from '../../footer/footer';

const Layout = () => {
  return (
    <>
      <Header/>
      <Container className={styles.container}>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  );
};

export default Layout;
