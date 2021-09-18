import React, { useState } from 'react';
import Materials from './Materials';
import PageSlider from './PageSlider';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Viewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <PdfViewer>
      <Materials
        onDocumentLoadSuccess={onDocumentLoadSuccess}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={numPages}
      />
      <PageSlider
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numPages={numPages}
      />
    </PdfViewer>
  );
};

export default Viewer;

const PdfViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px auto;
  padding: 0 10px;
  background-color: ${theme.middleGrey};
`;
