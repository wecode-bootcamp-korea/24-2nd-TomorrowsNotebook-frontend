import React, { useState } from 'react';
import styled from 'styled-components';

const PageSlider = ({ currentPage, setCurrentPage, numPages }) => {
  const [slidePage, setSlidePage] = useState(currentPage);

  const handlePageSlider = e => {
    setSlidePage(e.target.value);
  };

  const handlePageMover = () => {
    setCurrentPage(parseInt(slidePage));
  };

  return (
    <Wrapper>
      <MeHere
        type="range"
        min={1}
        max={numPages}
        value={slidePage}
        onChange={handlePageSlider}
        onMouseUp={handlePageMover}
        onKeyUp={handlePageMover}
      />
    </Wrapper>
  );
};

export default PageSlider;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3%;
  padding: 5px;
`;

const MeHere = styled.input`
  width: 100%;
  height: 100%;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    /* -webkit-appearance: none; */
    cursor: pointer;
    z-index: 999;
    height: 20px;
    width: 20px;
    border-radius: 15px;
    outline: 0;
    border: 0;
  }
`;
