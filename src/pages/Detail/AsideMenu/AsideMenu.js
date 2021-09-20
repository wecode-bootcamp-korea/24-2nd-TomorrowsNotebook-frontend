import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Search/FontAwesome';

const AsideMenu = props => (
  <Container>
    <Menu>
      <Archive />
      <Text>내 서재에 담기</Text>
    </Menu>
    <Menu>
      <Star />
      <Text>My Favorite</Text>
    </Menu>
    <Button>바로 읽기</Button>
  </Container>
);

const Container = styled.div`
  position: sticky;
  top: 0;
  right: 0px;
  width: 350px;
  height: 100vh;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.lightGrey};
`;

const Menu = styled.button`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;

const Archive = styled(Icons.Archive)`
  margin-right: 1rem;
`;

const Star = styled(Icons.Star)`
  margin-right: 1rem;
`;

const Text = styled.span``;

const Button = styled.button`
  position: absolute;
  bottom: 2%;
  left: 50%;
  width: 90%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.black};
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transform: translateX(-50%);
`;
export default AsideMenu;
