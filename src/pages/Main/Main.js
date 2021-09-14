import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BooksTap from '../../components/BooksTap/BooksTap';
import Banners from './Banners/Banners';
import CartoonBanner from './CartoonBanner/CartoonBanner';
import PreferenceTap from './PreferenceTap/PreferenceTap';
import TodaysBook from './TodaysBook/TodaysBook';
import TodaysSentence from './TodaysSentence/TodaysSentence';
import { customFetch } from '../../utils/api.js';
import { GENRE_URL, RECOMMEND_URL } from '../../config.js';

const Main = () => {
  const [recommendBook, setRecommendBook] = useState({});
  const [currentGenre, setCurrentGenre] = useState('에세이');
  const [genreBooks, setGenreBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    customFetch(
      RECOMMEND_URL,
      {},
      {
        onSuccess: res => setRecommendBook(res.RESULT[0]),
      }
    );
  }, []);

  useEffect(() => {
    const query = new URL(GENRE_URL);
    query.searchParams.set('search', currentGenre);
    customFetch(
      query.toString(),
      {},
      {
        onSuccess: res => setGenreBooks(res.RESULT),
      }
    );
  }, [currentGenre]);

  const handleGenre = genre => {
    setCurrentGenre(genre);
  };

  const goToDetail = (e, origin = 0, id) => {
    if (origin !== 0 && e.clientX !== origin) {
      // 드래그가 일어난 경우에는 상세페이지로 이동 X
      return;
    }
    history.push(`/detail/${id}`);
  };

  return (
    <OuterContainer>
      <Banners />
      <TodaysBook book={recommendBook} goToDetail={goToDetail} />
      <CartoonBanner />
      <BooksTap
        title="한 달 이내에 출간된 책"
        query={NEWBOOK}
        goToDetail={goToDetail}
      />
      <BooksTap
        title="해냄 출판사의 책"
        query={PUBLISHER[0]}
        goToDetail={goToDetail}
      />
      <PreferenceTap
        currentGenre={currentGenre}
        genreBooks={genreBooks}
        handleGenre={handleGenre}
        goToDetail={goToDetail}
      />
      <BooksTap
        title="김영사 출판사의 책"
        query={PUBLISHER[1]}
        goToDetail={goToDetail}
      />
      <TodaysSentence />
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 100%;
  margin-left: 60px;
`;

export default Main;

const NEWBOOK = {
  path: 'new',
  limit: 15,
};

const PUBLISHER = [
  {
    path: 'publisher',
    search: '해냄',
    limit: 10,
  },
  { path: 'publisher', search: '김영사', limit: 10 },
];
