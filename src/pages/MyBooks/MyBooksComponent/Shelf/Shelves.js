import React from 'react';
import styled from 'styled-components';
import BookCovers from './BookCovers';

const Shelves = ({ userShelf }) => {
  return (
    <Shelf>
      <ShelfInfo>
        <ShelfInfoName>{userShelf.shelf_name}</ShelfInfoName>
        <ShelfInfoCount>{userShelf.book_image.length} 권</ShelfInfoCount>
      </ShelfInfo>
      <BookCovers covers={userShelf.book_image} />
    </Shelf>
  );
};

const Shelf = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  margin-bottom: 40px;
  border-radius: 10px;
  border: 1px solid rgb(217, 217, 217);
`;

const ShelfInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px 0px 30px;
`;

const ShelfInfoName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ShelfInfoCount = styled.div`
  font-size: 15px;
`;

export default Shelves;
