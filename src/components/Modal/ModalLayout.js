import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return <>{children && <Layout>{children}</Layout>}</>;
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100001;
`;

export default Modal;
