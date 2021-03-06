import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import IndexModal from './IndexModal';
import Materials from './Materials';
import PageSlider from './PageSlider';
import styled from 'styled-components';
import { BASE_URL } from '../../config';

const Viewer = () => {
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handleRight = () => {
    const moveLimit = isSinglePage ? 1 : 2;

    if (currentPage === numPages) {
      alert('마지막 페이지입니다.');
      return;
    }

    setCurrentPage(currentPage + moveLimit);
  };

  const handleLeft = () => {
    const moveLimit = isSinglePage ? 1 : 2;

    if (currentPage === 1) {
      alert('첫번째 페이지입니다.');
      return;
    }

    setCurrentPage(currentPage - moveLimit);
  };

  const [getMaterial, setGetMaterial] = useState([]);
  const url = `http://10.58.2.152:8000/libraries/61/viewer`;

  useEffect(() => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.CDU_6JOu5bOI9SzTF_LRl1I7jso1QxbsiW_-WGrLyAE',
      },
    })
      .then(res => res.json())
      .then(res => setGetMaterial(res.RESULT[0]));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const toggleIndex = () => {
    setIsOpen(false);
    setIsIndexOpen(true);
  };

  const closeIndex = () => {
    setIsIndexOpen(false);
  };

  const [isSinglePage, setIsSinglePage] = useState(true);

  const toggleSinglePage = () => {
    setIsSinglePage(prev => !prev);
  };

  return (
    <PdfViewer>
      {isOpen && (
        <Modal
          toggleSinglePage={toggleSinglePage}
          isSinglePage={isSinglePage}
          toggleIndex={toggleIndex}
        />
      )}
      <Wrapper onClick={toggleModal}>
        <Materials
          pdf={getMaterial.s3_url}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numPages={numPages}
          isSinglePage={isSinglePage}
          isOpen={isOpen}
          handleRight={handleRight}
          handleLeft={handleLeft}
        />
        <PageSlider
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numPages={numPages}
        />
      </Wrapper>
      {isIndexOpen && (
        <IndexModal
          closeIndex={closeIndex}
          getMaterial={getMaterial}
          setCurrentPage={setCurrentPage}
        />
      )}
    </PdfViewer>
  );
};

export default Viewer;

const PdfViewer = styled.div`
  margin: auto;
  position: relative;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
