import React from 'react';
import styled from 'styled-components';

const Alert = ({ text }) => <AlertBox text={text !== 'none'}>{text}</AlertBox>;

const AlertBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.black};
  border-radius: 4px;
  color: #fff;
  transform: translate(-50%, -50%);
  opacity: ${({ text }) => (text ? '1' : '0')};
  transition: ${({ text }) => (text ? 'all 300ms ease-in' : '')};
`;
export default Alert;
