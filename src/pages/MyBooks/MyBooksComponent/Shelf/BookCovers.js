import React from 'react';
import styled, { keyframes } from 'styled-components';

const BookCovers = ({ covers }) => {
  return (
    <BookCover>
      {covers.length > 0 ? (
        covers.map((cover, idx) => {
          return (
            <Cover key={idx} style={{ zIndex: 9500 - idx }}>
              <img alt="책 표지" src={cover} />
            </Cover>
          );
        })
      ) : (
        <NonCover>책을 등록해 책장을 완성해보세요.</NonCover>
      )}
    </BookCover>
  );
};

const coverList = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity: 1;
  }
`;

const BookCover = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 170px;
  margin: 20px 20px 50px 20px;
  box-shadow: 0px 10px 10px -10px gray;
  animation: ${coverList} 1s forwards;
`;

const Cover = styled.li`
  display: flex;
  align-items: flex-end;
  width: 100px;
  margin-bottom: 10px;
  margin-left: -40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & img {
    width: 100px;
  }
`;

const NonCover = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 30rem;
  height: 170px;
  background-color: rgb(250, 250, 246);
`;

export default BookCovers;
