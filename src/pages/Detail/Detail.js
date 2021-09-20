import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Alert from './Alert';
import AsideMenu from './AsideMenu/AsideMenu';
import BookInfoTap from './BookInfoTap/BookInfoTap';
import BookSummary from './BookSummary/BookSummary';
import Comments from './Comments/Comments';
import DeleteModal from '../../components/Modal/DeleteModal';
import Potal from '../../components/Modal/Potal';
import ModalLayout from '../../components/Modal/ModalLayout';

const Detail = props => {
  const [book, setBook] = useState({});
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const [value, setValue] = useState('');
  const [onAlert, setOnAlert] = useState('none');
  const [openModal, setOpenModal] = useState({
    type: 'none',
    id: 0,
  });

  useEffect(() => {
    fetch('http://54.180.126.99:8000/books/1')
      .then(res => res.json())
      .then(res => setBook(res.RESULT))
      .catch(err => alert(err));
  }, []);

  useEffect(() => {
    getComment();
  }, []);

  const getComment = () => {
    fetch('http://54.180.126.99:8000/books/1/comments?id=1')
      .then(res => res.json())
      .then(res => setComments(res.comments))
      .catch(err => alert(err));
  };

  // 서버 없는 경우 mock data
  // useEffect(() => {
  //   fetch('/data/detail.json')
  //     .then(res => res.json())
  //     .then(res => setBook(res.results));
  // }, []);

  // useEffect(() => {
  //   fetch('/data/detail.json')
  //     .then(res => res.json())
  //     .then(res => setComments(res.comments));
  // }, []);

  const handleInfo = index => {
    const newIsOpen = isOpen.map((item, idx) => (idx === index ? !item : item));
    setIsOpen(newIsOpen);
  };

  const handleLike = id => {
    fetch(
      `http://54.180.126.99:8000/books/comments-like?comment_id=${id}&id=1`,
      {
        method: 'POST',
      }
    )
      .then(res => res.json())
      .then(res => res.message === 'SUCCESS' && getComment());
  };

  const handleAlert = content => {
    setOnAlert(content);
    setTimeout(() => {
      setOnAlert('none');
    }, 1000);
  };

  const handleCancle = target => {
    if (target === 'delete') {
      setOpenModal({
        state: 'none',
        id: 0,
      });
    }
  };

  const handleValue = e => {
    setValue(e.target.value);
  };

  const addComment = (e, value) => {
    fetch('http://54.180.126.99:8000/books/1/comments?id=1', {
      method: 'POST',
      body: JSON.stringify({
        text: value,
      }),
    })
      .then(res => res.json())
      .then(res => res.message === 'SUCCESS' && getComment());

    setValue('');
  };

  const handleDeleteButton = id => {
    setOpenModal({
      type: 'delete',
      id,
    });
  };

  const deleteComment = id => {
    fetch(`http://54.180.126.99:8000/books/${id}/comment-delete`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => res.message === 'SUCCESS' && getComment());
    const newComments = comments.filter(comment => comment.id !== id);

    setOpenModal({
      type: 'none',
      id: 0,
    });

    return newComments;
  };

  const updateComment = (e, action) => {
    if (action.type === 'add' && value.trim().length === 0) {
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

  return (
    <Container>
      <Wrapper>
        <BookSummary book={book} />
        <BookInfoTap book={book} isOpen={isOpen} handleInfo={handleInfo} />
        <Comments
          value={value}
          isValid={value.length > 4}
          comments={comments}
          handleLike={handleLike}
          updateComment={updateComment}
          handleValue={handleValue}
          handleDeleteButton={handleDeleteButton}
        />
      </Wrapper>
      <AsideMenu />
      <Alert text={ALERT[onAlert]} />
      <Potal>
        <ModalLayout>
          {openModal.type === 'delete' && (
            <DeleteModal
              id={openModal.id}
              handleCancle={handleCancle}
              updateComment={updateComment}
            />
          )}
        </ModalLayout>
      </Potal>
    </Container>
  );
};

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
  none: 'none',
};
