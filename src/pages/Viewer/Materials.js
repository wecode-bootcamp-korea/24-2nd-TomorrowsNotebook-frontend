import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import { AngleRight, AngleLeft } from '@styled-icons/fa-solid';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Materials = ({
  pdf,
  onDocumentLoadSuccess,
  currentPage,
  numPages,
  isSinglePage,
  isOpen,
  handleLeft,
  handleRight,
}) => {
  return (
    <Wrapper>
      {!isOpen && (
        <>
          <MoveTo direction="left" onClick={handleLeft}>
            <LeftAngle />
          </MoveTo>
          <MoveTo direction="right" onClick={handleRight}>
            <RightAngle />
          </MoveTo>
        </>
      )}
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error.message}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
      >
        {isSinglePage ? (
          <Page pageNumber={currentPage} height={800} />
        ) : (
          <PageWrapper>
            <Page pageNumber={currentPage} height={800} />
            <Page pageNumber={currentPage + 1} height={800} />
          </PageWrapper>
        )}
      </Document>
      <PageNumber>
        {currentPage} / {numPages}
      </PageNumber>
    </Wrapper>
  );
};

export default Materials;

const Wrapper = styled.div`
  padding: 10px;
  position: relative;
`;

const MoveTo = styled.div`
  display: flex;
  justify-content: ${props => props.direction};
  align-items: center;
  position: absolute;
  ${props => props.direction}: 0;
  bottom: 5px;
  z-index: 999;
  width: 25%;
  height: 720px;
  cursor: pointer;
`;

const PageNumber = styled.div`
  position: absolute;
  bottom: 3%;
  right: 2rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.7rem;
`;

const LeftAngle = styled(AngleLeft)`
  margin: 0 20px;
  width: 2rem;
  opacity: 0;
  color: ${({ theme }) => theme.middleGrey};

  &:hover {
    opacity: 1;
  }
`;

const RightAngle = styled(AngleRight)`
  margin: 0 20px;
  width: 2rem;
  opacity: 0;
  color: ${({ theme }) => theme.middleGrey};

  &:hover {
    opacity: 1;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
`;
