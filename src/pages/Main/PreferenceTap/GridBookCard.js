import React from 'react';
import styled from 'styled-components';

const GridBookCard = ({
  book: { title, image, book_id },
  isTop,
  goToDetail,
}) => {
  return (
    <Container isTop={isTop}>
      <Card onClick={e => goToDetail(e, 0, book_id)}>
        <Img src={image} alt="책 이미지" />
      </Card>
      <Name>{title}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isTop }) => (isTop ? 'flex-start' : 'flex-end')};
  height: 240px;
`;

const Name = styled.h2`
  font-weight: bold;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  padding: 1.2rem;
  margin-bottom: 0.8rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.ivory};
  cursor: pointer;
`;

const Img = styled.img`
  width: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
`;

export default GridBookCard;
