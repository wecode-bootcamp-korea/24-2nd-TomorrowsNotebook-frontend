import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BooksTap from '../../components/BooksTap/BooksTap';
import Banners from './Banners/Banners';
import CartoonBanner from './CartoonBanner/CartoonBanner';
import PreferenceTap from './PreferenceTap/PreferenceTap';
import TodaysBook from './TodaysBook/TodaysBook';
import TodaysSentence from './TodaysSentence/TodaysSentence';
import { customFetch } from '../../utils/api.js';
import { GENRE_URL, RECOMMEND_URL } from '../../config.js';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';

const Main = () => {
  const [recommendBook, setRecommendBook] = useState({});
  const [currentGenre, setCurrentGenre] = useState('에세이');
  const [genreBooks, setGenreBooks] = useState([]);

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

  return (
    <>
      <Nav />
      <OuterContainer>
        <Banners />
        <TodaysBook book={recommendBook} />
        <CartoonBanner />
        <BooksTap title="한 달 이내에 출간된 책" query={NEWBOOK} />
        <BooksTap title="해냄 출판사의 책" query={PUBLISHER[0]} />
        <PreferenceTap
          currentGenre={currentGenre}
          genreBooks={genreBooks}
          handleGenre={handleGenre}
        />
        <BooksTap title="김영사 출판사의 책" query={PUBLISHER[1]} />
        <TodaysSentence />
      </OuterContainer>
      <Footer />
    </>
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
