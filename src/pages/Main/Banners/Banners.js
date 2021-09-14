import React, { useState } from 'react';
import styled from 'styled-components';
import BannerList from './BannerList';

const Banners = props => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlide = direction => {
    const newCurrentSlide =
      direction === 'left' ? currentSlide - 1 : currentSlide + 1;
    direction === 'left'
      ? setCurrentSlide(currentSlide === 1 ? BANNER.length : newCurrentSlide)
      : setCurrentSlide(currentSlide === BANNER.length ? 1 : newCurrentSlide);
  };

  return (
    <BannerContainer>
      {BANNER.map(banner => (
        <BannerList
          banner={banner}
          key={banner.idx}
          handleSlide={handleSlide}
          currentSlide={currentSlide}
          slideLength={BANNER.length}
        />
      ))}
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  height: 400px;
  margin-bottom: 5rem;
`;

export default Banners;

const BANNER = [
  {
    idx: 1,
    image: 'http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg',
    background: 'linear-gradient(to right, #d9a7c7, #fffcdc)',
    title: `추리소설의 명장 히가시노 게이고 신작!`,
    subtitle: '이 소설을 읽지 않으면...',
  },
  {
    idx: 2,
    image: 'http://image.yes24.com/goods/308834/XL',
    background: 'linear-gradient(to right, #c9d6ff, #e2e2e2)',
    title: `RM이 선택한 그 책 ${'<요절>'} 입고 !`,
    subtitle: '밀리에서 전자책 최초공개!',
  },
  {
    idx: 3,
    image: 'http://bimage.interpark.com/goods_image/5/2/0/2/352625202g.jpg',
    background: 'linear-gradient(to right, #1c92d2, #f2fcfe)',
    title: `9월 3주에 에디터들이 읽을 책은?`,
    subtitle: '1,038권 중 단 5권!',
  },
];
