import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const BookCard = ({ book: { book_image, title, book_id } }) => {
  const history = useHistory();

  const goToDetail = () => {
    history.push(`/detail/${book_id}`);
  };

  return (
    <Card>
      <BookImg src={book_image} alt="책 이미지" onClick={goToDetail} />
      <BookName>{title}</BookName>
    </Card>
  );
};

const Card = styled.div`
  width: 50%;
  height: 300px;
  margin-right: 1rem;
  padding: 35px;
  border: 1px solid #efefef;
  border-radius: 16px;
`;

const BookImg = styled.img`
  width: 150px;
  height: auto;
  margin-right: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

const BookName = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

export default BookCard;
