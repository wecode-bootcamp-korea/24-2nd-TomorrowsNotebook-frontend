import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router';
import { Bookmark3 } from '@styled-icons/remix-fill/Bookmark3';

const Books = ({
  userTotalBook: {
    book_id,
    book_name,
    book_image,
    book_author,
    book_read,
    favorite,
  },
}) => {
  const history = useHistory();

  const goToViewer = () => {
    history.push(`/viewer/${book_id}`);
  };

  const goToDetail = () => {
    history.push(`/books/${book_id}`);
  };

  return (
    <BooksFrame>
      <BookHoverBox>
        <BookReadBtn onClick={goToViewer}>바로읽기</BookReadBtn>
        <BookInfoBtn onClick={goToDetail}>책 정보</BookInfoBtn>
        <BookImage src={book_image} />
        {favorite && <Bookmark />}
      </BookHoverBox>
      <BookName>{book_name}</BookName>
      <BookAuthor>{book_author}</BookAuthor>
      {!!book_read && <BookRead>{book_read}%</BookRead>}
    </BooksFrame>
  );
};

const BooksFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 9rem;
  margin-right: 1rem;
  margin-bottom: 40px;
`;

const BookHoverBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  :hover {
    & button {
      display: block;
    }
  }
`;

const BookReadBtn = styled.button`
  position: absolute;
  top: 60px;
  display: none;
  width: 5rem;
  height: 30px;
  background-color: white;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  z-index: 9001;

  &:hover + button + img {
    filter: brightness(50%);
  }
`;

const BookInfoBtn = styled.button`
  position: absolute;
  top: 100px;
  display: none;
  width: 5rem;
  height: 30px;
  color: white;
  font-size: 12px;
  cursor: pointer;
  z-index: 9001;
  &:hover + img {
    filter: brightness(50%);
  }
`;

const BookImageEffect = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity: 1;
  }
`;

const BookImage = styled.img`
  width: 9rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  animation: ${BookImageEffect} 1s forwards;
  z-index: 9000;

  :hover {
    filter: brightness(50%);
  }
`;

const Bookmark = styled(Bookmark3)`
  position: absolute;
  top: -3px;
  right: -3px;
  width: 2rem;
  color: #fdd835;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 9001;
`;

const BookName = styled.div`
  margin-top: 7px;
  width: 8rem;
  font-weight: bold;
`;

const BookAuthor = styled.div`
  margin-top: 5px;
  color: gray;
  font-size: 10px;
`;

const BookRead = styled.div`
  margin-top: 3px;
  font-size: 10px;
  font-weight: bold;
`;

export default Books;
