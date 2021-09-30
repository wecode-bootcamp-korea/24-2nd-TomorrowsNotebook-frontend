import React from 'react';
import styled from 'styled-components';

const BookCard = ({ book: { book_image, title, book_id }, goToDetail }) => {
  return (
    <Card>
      <BookImg
        src={book_image}
        alt="책 이미지"
        onClick={e => goToDetail(e, 0, book_id)}
      />
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
