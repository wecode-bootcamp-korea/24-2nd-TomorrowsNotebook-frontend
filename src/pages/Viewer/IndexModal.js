import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const IndexModal = ({ closeIndex, getMaterial, setCurrentPage }) => {
  const indexData = getMaterial.book_info
    .split(/[\n]/)
    .filter(item => item)
    .map((item, idx) => ({ title: item, page: bookIndexTable[idx] }));

  return (
    <Container>
      <ModalHeader>
        <Title>목차</Title>
        <CloseBtn onClick={closeIndex}>X</CloseBtn>
      </ModalHeader>
      <BookCover>
        <img alt="책표지" src={getMaterial.image_url} />
        <BookName>{getMaterial.title}</BookName>
        <Author>{getMaterial.author}</Author>
      </BookCover>
      <ChapterWrapper>
        {indexData.map((el, idx) => (
          <Chapter key={idx} onClick={() => setCurrentPage(el.page)}>
            {el.title}
          </Chapter>
        ))}
      </ChapterWrapper>
    </Container>
  );
};

const bookIndexTable = {
  0: 4,
  1: 11,
  2: 13,
  3: 14,
  4: 15,
  5: 15,
  6: 15,
  7: 15,
  8: 15,
  9: 15,
  10: 15,
  11: 15,
  12: 15,
  13: 15,
  14: 15,
};

export default IndexModal;

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 20rem;
  height: 100%;
  background-color: white;
  overflow: auto;
  border-left: 1px solid ${theme.grey};
  box-shadow: 1px 1px 13px ${theme.lightGrey};
  z-index: 999;
`;

const ModalHeader = styled.div`
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
`;

const BookCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 23rem;
  padding: 10px 30px;

  img {
    width: 10rem;
    margin: 10px 0;
    box-shadow: 1px 1px 13px ${theme.lightGrey};
    border-radius: 3px;
  }
`;

const Title = styled.div`
  margin: 20px;
  font-size: 1.6rem;
  font-weight: 700;
`;

const BookName = styled.div`
  margin: 10px;
  font-weight: 700;
  color: ${theme.black};
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  color: ${theme.middleGrey};
`;

const ChapterWrapper = styled.div`
  box-shadow: 1px 1px 13px ${theme.lightGrey};
`;

const Chapter = styled.div`
  width: 100%;
  padding: 13px 30px;
  background-color: ${theme.grey};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${theme.pupple};
  }
`;
