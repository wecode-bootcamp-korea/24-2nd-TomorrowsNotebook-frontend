import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import IndexModal from './IndexModal';
import Materials from './Materials';
import PageSlider from './PageSlider';
import styled from 'styled-components';

const Viewer = () => {
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handleRight = () => {
    if (isSinglepage) {
      if (currentPage < numPages) {
        setCurrentPage(currentPage + 1);
      } else if (currentPage === numPages) {
        alert('마지막 페이지입니다.');
      }
    } else if (isDoublepage) {
      if (currentPage < numPages) {
        setCurrentPage(currentPage + 2);
      } else if (currentPage === numPages) {
        alert('마지막 페이지입니다.');
      }
    }
  };

  const handleLeft = () => {
    if (isSinglepage) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else if (currentPage === 1) {
        alert('첫번째 페이지입니다.');
      }
    } else if (isDoublepage) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 2);
      } else if (currentPage === 1) {
        alert('첫번째 페이지입니다.');
      }
    }
  };

  const [getMaterial, setGetMaterial] = useState([]);
  const url = 'http://10.58.7.133:8000/libraries/61/viewer';

  useEffect(() => {
    fetch(url, {
      method: 'GET',
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

  const [isSinglepage, setIsSinglepage] = useState(true);
  const [isDoublepage, setIsDoublepage] = useState(false);
  const handleSinglePage = () => {
    if (isDoublepage) {
      setIsSinglepage(true);
      setIsDoublepage(false);
    } else {
      setIsSinglepage(true);
    }
  };

  const handleDoublePage = () => {
    if (isSinglepage) {
      setIsSinglepage(false);
      setIsDoublepage(true);
    } else {
      setIsDoublepage(true);
    }
  };

  return (
    <PdfViewer>
      {isOpen && (
        <Modal
          handleSinglePage={handleSinglePage}
          handleDoublePage={handleDoublePage}
          isSinglepage={isSinglepage}
          isDoublepage={isDoublepage}
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
          isSinglepage={isSinglepage}
          isDoublepage={isDoublepage}
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
