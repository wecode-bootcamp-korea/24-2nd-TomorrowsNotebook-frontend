import React, { useState } from 'react';
import styled from 'styled-components';
import Book from './Book';

const Books = props => {
  const [position, setPosition] = useState(0);
  const [originX, setOriginX] = useState(0);
  const [afterX, setAfterX] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  const handleSlide = e => {
    const newPosition = e.clientX - originX + afterX;
    const hiddenLength = e.currentTarget.offsetWidth - 166 * BOOKS.length;
    if (isScroll === false) {
      return;
    }

    newPosition < 10 && newPosition > hiddenLength && setPosition(newPosition);
  };

  const handleScroll = (e, scroll) => {
    switch (scroll) {
      case 'start':
        setOriginX(e.clientX);
        setIsScroll(true);
        break;
      case 'end':
        setAfterX(position);
        setIsScroll(false);
        break;
      case 'leave':
        setIsScroll(false);
        break;
    }
  };

  return (
    <BookList
      afterX={afterX}
      position={position}
      onMouseMove={handleSlide}
      onMouseDown={e => handleScroll(e, 'start')}
      onMouseUp={e => handleScroll(e, 'end')}
      onMouseLeave={e => handleScroll(e, 'leave')}
    >
      {BOOKS.map((book, idx) => (
        <Book book={book} key={idx} />
      ))}
    </BookList>
  );
};

const BookList = styled.ul`
  display: flex;
  align-items: flex-end;
  transform: translateX(${({ position }) => position}px);
`;

export default Books;

// 임시 데이터
const BOOKS = [
  {
    id: 1,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    name: '미등록자',
    author: '히가시노 게이고',
  },
  {
    id: 2,
    image: 'http://image.yes24.com/goods/308834/XL',
    name: '요절',
    author: '조승우',
  },
  {
    id: 3,
    image: 'http://bimage.interpark.com/goods_image/5/2/0/2/352625202g.jpg',
    name: '방황 하는 칼날',
    author: '히가시노 게이고',
  },
  {
    id: 4,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    name: '미등록자',
    author: '히가시노 게이고',
  },
  {
    id: 5,
    image: 'http://image.yes24.com/goods/308834/XL',
    name: '요절',
    author: '조승우',
  },
  {
    id: 6,
    image: 'http://bimage.interpark.com/goods_image/5/2/0/2/352625202g.jpg',
    name: '방황 하는 칼날',
    author: '히가시노 게이고',
  },
  {
    id: 7,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    name: '미등록자',
    author: '히가시노 게이고',
  },
  {
    id: 8,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    name: '미등록자',
    author: '히가시노 게이고',
  },
  {
    id: 9,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    name: '미등록자',
    author: '히가시노 게이고',
  },
];
