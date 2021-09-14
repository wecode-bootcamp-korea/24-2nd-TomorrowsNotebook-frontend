import React from 'react';
import BooksTap from '../../components/BooksTap/BooksTap';
import Banners from './Banners/Banners';
import CartoonBanner from './CartoonBanner/CartoonBanner';
import TodaysBook from './TodaysBook/TodaysBook';
import TodaysSentence from './TodaysSentence/TodaysSentence';

const Main = props => {
  return (
    <>
      <Banners />
      <TodaysBook />
      <CartoonBanner />
      <BooksTap title={'한 달 이내에 출간된 책'} />
      <TodaysSentence />
    </>
  );
};

export default Main;
