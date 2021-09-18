import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Icons, iconBoxDefault } from '../Search/FontAwesome';
import example from './example.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Materials = ({
  onDocumentLoadSuccess,
  currentPage,
  setCurrentPage,
  numPages,
}) => {
  const handleRightClicked = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    } else if ((currentPage = numPages)) {
      alert('마지막 페이지입니다.');
    }
  };

  const handleLeftClicked = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if ((currentPage = 1)) {
      alert('첫번째 페이지입니다.');
    }
  };

  return (
    <Wrapper>
      <MoveTo direction="left" onClick={handleLeftClicked}>
        <LeftArrow />
      </MoveTo>
      <MoveTo direction="right" onClick={handleRightClicked}>
        <RightArrow />
      </MoveTo>
      <Document
        // file="https://janine-bucket.s3.amazonaws.com/git-document.pdf"
        file={example}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error.message}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      >
        <Page pageNumber={currentPage} />
      </Document>
      <PageNumber>
        {currentPage} / {numPages}
      </PageNumber>
    </Wrapper>
  );
};

export default Materials;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const MoveTo = styled.div`
  display: flex;
  justify-content: ${props => props.direction};
  align-items: center;
  position: absolute;
  ${props => props.direction}: 0;
  top: 0;
  z-index: 999;
  width: 25%;
  height: 97%;
  cursor: pointer;
`;

const PageNumber = styled.div`
  position: absolute;
  bottom: 3%;
  right: 1rem;
  color: ${theme.middleGrey};
  font-size: 0.7rem;
`;

const LeftArrow = styled(Icons.AngleL)`
  ${iconBoxDefault}
  margin: 0 20px;
  color: ${theme.middleGrey};
`;

const RightArrow = styled(Icons.AngleR)`
  ${iconBoxDefault}
  margin: 0 20px;
  color: ${theme.middleGrey};
`;
