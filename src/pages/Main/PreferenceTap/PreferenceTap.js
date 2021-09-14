import React from 'react';
import styled from 'styled-components';
import SubHeader from '../SubHeader/SubHeader';
import Genres from './Genres';
import GridBookCard from './GridBookCard';

const PreferenceTap = ({
  genreBooks,
  currentGenre,
  handleGenre,
  goToDetail,
}) => (
  <Container>
    <SubHeader title="이번 주 취향별 추천 책" />
    <Genres currentGenre={currentGenre} handleGenre={handleGenre} />
    <BooksContainer>
      {genreBooks.map((book, idx) => (
        <GridBookCard
          book={book}
          key={book.book_id}
          isTop={(idx + 1) % 3 === 2}
          goToDetail={goToDetail}
        />
      ))}
    </BooksContainer>
  </Container>
);

const Container = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  margin: 0 auto 5rem;
`;

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;
export default PreferenceTap;

const PREBOOKS = [
  {
    id: 1,
    name: '지구 끝의 온실',
    image:
      'https://image.aladin.co.kr/product/27692/63/cover500/k082733434_1.jpg',
  },
  {
    id: 2,
    name: '햇빛은 찬란하고 인생은 귀하니까요',
    image:
      'https://image.aladin.co.kr/product/27691/91/cover500/8934985011_1.jpg',
  },
  {
    id: 3,
    name: '인생은 실전이다.',
    image:
      'https://image.aladin.co.kr/product/27920/27/cover500/k532734505_2.jpg',
  },
  {
    id: 4,
    name: '작별하지 않는다',
    image:
      'https://image.aladin.co.kr/product/27877/5/cover500/8954682154_1.jpg',
  },
  {
    id: 5,
    name: '완벽한 여자',
    image:
      'https://image.aladin.co.kr/product/27800/66/cover500/k302734169_1.jpg',
  },
  {
    id: 6,
    name: '슈뢰딩거의 아이들',
    image:
      'https://image.aladin.co.kr/product/27521/96/cover500/k222733293_1.jpg',
  },
];
