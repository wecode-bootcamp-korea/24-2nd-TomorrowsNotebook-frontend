import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Star } from '@styled-icons/bootstrap/Star';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { Books } from '@styled-icons/icomoon/Books';
const AsideMenu = ({
  isFavorite,
  id,
  handleMyBooks,
  handleFavorite,
  handleAlert,
}) => (
  <Container>
    <Menu onClick={handleMyBooks}>
      <Archive />
      <Text>내 서재에 담기</Text>
    </Menu>
    <Menu onClick={handleFavorite}>
      {!isFavorite ? <StarIcon /> : <FilledStarIcon />}
      <Text>My Favorite</Text>
    </Menu>
    {id !== 61 ? (
      <Button onClick={() => handleAlert('unready')}>바로 읽기</Button>
    ) : (
      <LinkButton
        to={`/viewer/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        바로 읽기
      </LinkButton>
    )}
  </Container>
);

const Container = styled.div`
  position: sticky;
  top: 60px;
  right: 0;
  width: 350px;
  height: 94vh;
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

const Archive = styled(Books)`
  width: 1rem;
  margin-right: 1rem;
`;

const StarIcon = styled(Star)`
  width: 1rem;
  margin-right: 1rem;
`;

const FilledStarIcon = styled(StarFill)`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.yellow};
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
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  transform: translateX(-50%);
`;

const LinkButton = styled(Button.withComponent(Link))``;

export default AsideMenu;

// to="/viewer" target="_blank" rel="noopener noreferrer"
