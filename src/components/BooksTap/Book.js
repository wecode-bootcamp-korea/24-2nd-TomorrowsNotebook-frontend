import React from 'react';
import styled from 'styled-components';

const Book = ({ book, handleSlide }) => {
  return (
    <Item>
      <Img src={book.image} alt="책 이미지" draggable={false} />
      <UserInfo draggable="true">
        <Name>{book.name}</Name>
        <Author>{book.author}</Author>
      </UserInfo>
    </Item>
  );
};
const Item = styled.li`
  margin-right: 1rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 150px;
`;

const UserInfo = styled.div`
  height: 3rem;
`;

const Name = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`;

const Author = styled.p`
  color: #999;
`;

export default Book;