import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

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
      <input
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
  bottom: 10px;
  width: 100%;
  height: 1rem;

  input {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1.6rem;
      height: 0.5rem;
      margin-bottom: 2px;
      border-radius: 20px;
      background: ${theme.pupple};
      z-index: 997;
      cursor: pointer;
    }
  }
`;
