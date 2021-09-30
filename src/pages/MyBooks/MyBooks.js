import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Top from './MyBooksComponent/Top/Top';
import MybooksNav from './MyBooksComponent/MybooksNav/MybooksNav';
import Books from './MyBooksComponent/TotalBooks/Books';
import MainShelf from './MyBooksComponent/Shelf/MainShelf';
import Nav from '../../components/Nav/Nav';

const MyBooks = () => {
  const [libraries, setLibraries] = useState({
    user_nickname: '',
    user_image: '',
    user_totalbooks: [],
  });
  const [shelves, setShelves] = useState({
    user_nickname: '',
    user_image: '',
    user_shelves: [],
  });
  const [scrollActive, setScrollActive] = useState(false);
  const [selectAlign, setSelectAlign] = useState('recentlyAdd');
  const [selectNav, setSelectNav] = useState('Total');
  const [shelfName, setShelfName] = useState('');
  const [alignData, setAlignData] = useState([]);

  useEffect(() => {
    localStorage.getItem('kakao-token') &&
      fetch(`${process.env.REACT_APP_SERVER_URL}/libraries`, {
        headers: {
          Authorization: localStorage.getItem('kakao-token'),
        },
      })
        .then(res => res.json())
        .then(res => {
          const { user_nickname, user_image, user_totalbooks } = res.results[0];
          setLibraries({ user_nickname, user_image, user_totalbooks });
        });
  }, []);

  const addShelf = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/libraries`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('kakao-token'),
      },
      body: JSON.stringify({ shelf_name: shelfName }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          alert(`서재에 책장이 추가 되었습니다`);
        } else if (res.MESSAGE === `ALREADY EXISTED SHELF`) {
          alert(`이름이 ${shelfName} 과 같은 책장이 이미 있어요!`);
        } else if (res.MESSAGE === `INPUT ERROR`) {
          alert(`책장 이름을 추가 해주세요!`);
        }
        setShelfName('');
        clickshelves();
      });
  };

  const clickshelves = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/libraries/shelf`, {
      headers: {
        Authorization: localStorage.getItem('kakao-token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        const { user_nickname, user_image, user_shelves } = res.results[0];

        setShelves({ user_nickname, user_image, user_shelves });
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setScrollActive(window.scrollY >= 300)
    );
  }, []);

  const { user_image, user_nickname, user_totalbooks } = libraries;
  const { user_shelves } = shelves;

  useEffect(() => {
    setAlignData(user_totalbooks);
  }, [user_totalbooks]);

  useEffect(() => {
    const ascending = key =>
      function (a, b) {
        return a[key] < b[key] ? -1 : 1;
      };

    const keyMapper = {
      bookName: 'book_name',
      bookAuthor: 'book_author',
      bookPublishName: 'book_publisher',
      bookPublishDate: 'book_publish_date',
    };

    setAlignData([...alignData].sort(ascending(keyMapper[selectAlign])));
  }, [selectAlign]);

  const activeApply = () => {
    setLibraries(prev => ({ ...prev, user_totalbooks: alignData }));
  };

  const MainContent = {
    TotalBooks: (
      <TotalbooksFrame>
        {user_totalbooks.map((userTotalBook, idx) => (
          <Books key={idx} userTotalBook={userTotalBook} />
        ))}
      </TotalbooksFrame>
    ),
    shelf: <MainShelf user_shelves={user_shelves} />,
  };

  return (
    <>
      <Nav />
      <PageFrame>
        <Top user_nickname={user_nickname} user_image={user_image} />
        <MainFrame>
          <MybooksNav
            user_shelves={user_shelves}
            user_totalbooks={user_totalbooks}
            scrollActive={scrollActive}
            selectNav={selectNav}
            setSelectNav={setSelectNav}
            setShelfName={setShelfName}
            addShelf={addShelf}
            selectAlign={selectAlign}
            setSelectAlign={setSelectAlign}
            activeApply={activeApply}
            clickshelves={clickshelves}
          />
          {selectNav === 'Total' ? MainContent.TotalBooks : MainContent.shelf}
        </MainFrame>
      </PageFrame>
    </>
  );
};

const PageFrame = styled.body`
  position: relative;
  margin-left: 60px;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  width: 100%;
  background-color: white;
  box-shadow: 0px -10px 10px -10px gray;
`;

const TotalbooksFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70rem;
`;

export default MyBooks;
