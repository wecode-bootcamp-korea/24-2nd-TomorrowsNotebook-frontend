import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Alert from './Alert';
import AsideMenu from './AsideMenu/AsideMenu';
import BookInfoTap from './BookInfoTap/BookInfoTap';
import BookSummary from './BookSummary/BookSummary';
import Comments from './Comments/Comments';
import DeleteModal from '../../components/Modal/DeleteModal';
import Potal from '../../components/Modal/Potal';
import ModalLayout from '../../components/Modal/ModalLayout';
import ToMyBooksModal from '../../components/Modal/ToMyBooksModal';
import { BASE_URL } from '../../config.js';
import LibraryModal from '../../components/Modal/LibraryModal';
import Nav from '../../components/Nav/Nav';

const Detail = () => {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [commentValue, setCommentValue] = useState('');
  const [libraryName, setLibraryName] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [onAlert, setOnAlert] = useState('none');
  const [openModal, setOpenModal] = useState({
    type: 'none',
    id: 0,
  });
  const [libraryList, setLibraryList] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/books/${params.id}`)
      .then(res => res.json())
      .then(res => setBook(res.RESULT))
      .catch(err => alert(err));
  }, []);

  useEffect(() => {
    getComment();
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/libraries/shelflist`, {
      headers: {
        // 테스트용 임시토큰
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
    })
      .then(res => res.json())
      .then(res =>
        setLibraryList(
          res.results[0].shelves_name.map(item => {
            return { ...item, isChecked: false };
          })
        )
      )
      .catch(err => alert(err));
  }, [openModal]);

  const getComment = () => {
    fetch(`${BASE_URL}/books/${params.id}/comments`, {
      headers: {
        // 테스트용 임시토큰
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
    })
      .then(res => res.json())
      .then(res => setComments(res.comments))
      .catch(err => alert(err));
  };

  const handleInfo = index => {
    const newIsOpen = isOpen.map((item, idx) => (idx === index ? !item : item));
    setIsOpen(newIsOpen);
  };

  const handleLike = id => {
    fetch(`${BASE_URL}/books/comments-like?comment_id=${id}`, {
      method: 'POST',
      headers: {
        // 테스트용 임시토큰
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
    })
      .then(res => res.json())
      .then(res => res.MESSAGE === 'SUCCESS' && getComment());
  };

  const handleAlert = content => {
    setOnAlert(content);
    setTimeout(() => {
      setOnAlert('none');
    }, 1000);
  };

  const handleMyBooks = () => {
    setOpenModal({
      type: 'put',
      id: 0,
    });
  };

  const handleFavorite = () => {
    const content = isFavorite ? 'unfollowed' : 'followed';
    handleAlert(content);
    setIsFavorite(!isFavorite);
  };

  const handleMakeButton = () => {
    setOpenModal({
      type: 'make',
      id: 0,
    });
  };

  const handleLibraryName = e => {
    if (e.target.value.length + 1 > 40) {
      return;
    }
    setLibraryName(e.target.value);
  };

  const handleLibrary = id => {
    const newLibraryList = libraryList.map(library => {
      return { ...library, isChecked: library.shelf_id === id };
    });
    setLibraryList(newLibraryList);
  };

  const onPutBook = () => {
    const id = libraryList.filter(library => library.isChecked)[0].shelf_id;

    fetch(`${BASE_URL}/libraries/shelflist`, {
      method: 'POST',
      headers: {
        // 테스트용 임시토큰
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
      body: JSON.stringify({
        shelf_id: id,
        book_id: params.id,
      }),
    })
      .then(res => res)
      .then(res => {
        if (res.status === 201) {
          handleCancel();
        }
        if (res.status === 404) {
          alert('이미 책장에 추가된 책입니다.');
        }
      });
  };

  const addLibrary = () => {
    fetch(`${BASE_URL}/libraries`, {
      method: 'POST',
      headers: {
        // 테스트용 임시토큰
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
      body: JSON.stringify({
        shelf_name: libraryName,
      }),
    })
      .then(res => res)
      .then(res => res.status === 201 && handleMyBooks());
    setLibraryName('');
  };

  const handleCancel = target => {
    setOpenModal({
      type: 'none',
      id: 0,
    });
  };

  const handleCommentValue = e => {
    setCommentValue(e.target.value);
  };

  const addComment = (e, value) => {
    fetch(`${BASE_URL}/books/${params.id}/comments`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
      body: JSON.stringify({
        text: commentValue,
      }),
    })
      .then(res => res.json())
      .then(res => res.MESSAGE === 'SUCCESS' && getComment());

    setCommentValue('');
  };

  const handleDeleteButton = id => {
    setOpenModal({
      type: 'delete',
      id,
    });
  };

  const deleteComment = id => {
    fetch(`${BASE_URL}/books/${params.id}/comments?comment_id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qv95Bi-t7XRinlViaIJthSkG5wKt6ZHDICMZm2pANh8',
      },
    })
      .then(res => res.status)
      .then(res => res === 204 && getComment());
    const newComments = comments.filter(comment => comment.id !== id);

    setOpenModal({
      type: 'none',
      id: 0,
    });

    return newComments;
  };

  const updateComment = (e, action) => {
    if (action.type === 'add' && commentValue.trim().length === 0) {
      e.preventDefault();
      return;
    }

    switch (action.type) {
      case 'add':
        e.preventDefault();
        addComment(e, action.value);
        handleAlert('comment');
        break;

      case 'delete':
        const nextComments = deleteComment(action.id);
        setComments(nextComments);
        break;

      default:
        break;
    }
  };

  const MODAL = {
    delete: (
      <DeleteModal
        id={openModal.id}
        handleCancel={handleCancel}
        updateComment={updateComment}
      />
    ),
    put: (
      <ToMyBooksModal
        handleCancel={handleCancel}
        handleMakeButton={handleMakeButton}
        libraryList={libraryList}
        handleLibrary={handleLibrary}
        onPutBook={onPutBook}
      />
    ),
    make: (
      <LibraryModal
        handleCancel={handleCancel}
        handleLibraryName={handleLibraryName}
        libraryName={libraryName}
        addLibrary={addLibrary}
      />
    ),
  };

  return (
    <>
      <Nav />
      <OuterContainer>
        <Container>
          <Wrapper>
            <BookSummary book={book} comments={comments} />
            <BookInfoTap book={book} isOpen={isOpen} handleInfo={handleInfo} />
            <Comments
              value={commentValue}
              isValid={commentValue.length > 4}
              comments={comments}
              handleLike={handleLike}
              updateComment={updateComment}
              handleValue={handleCommentValue}
              handleDeleteButton={handleDeleteButton}
            />
          </Wrapper>
          <AsideMenu
            handleMyBooks={handleMyBooks}
            handleFavorite={handleFavorite}
            handleAlert={handleAlert}
            isFavorite={isFavorite}
            id={Number(params.id)}
          />
          <Alert text={ALERT[onAlert]} />
          <Potal>
            <ModalLayout>{MODAL[openModal.type]}</ModalLayout>
          </Potal>
        </Container>
      </OuterContainer>
    </>
  );
};

const OuterContainer = styled.div`
  margin-left: 60px;
`;

const Container = styled.div`
  display: flex;
  max-width: 70rem;
  min-width: 40rem;
  margin: 0 auto;
  border-left: 1px solid ${({ theme }) => theme.lightGrey};
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default Detail;

const ALERT = {
  followed: 'My favorite 책장에 담았습니다.',
  unfollowed: 'My favorite 책장에서 해제되었습니다.',
  comment: '리뷰가 등록되었습니다.',
  unready: '서비스 준비 중입니다.',
  none: 'none',
};
