import React from 'react';
import styled from 'styled-components';

const Genres = ({ currentGenre, handleGenre }) => (
  <Container>
    {GENRES.map((genres, idx) => (
      <Genre
        key={idx}
        isClicked={genres.genres === currentGenre}
        onClick={() => handleGenre(genres.genres)}
      >
        {genres.genres}
      </Genre>
    ))}
  </Container>
);

const Container = styled.div`
  width: 100%;
`;

const Genre = styled.button`
  margin: 0 0.5rem 1rem 0;
  padding: 0.4em 1em;
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.black : 'white'};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 20px;
  color: ${({ theme, isClicked }) => (isClicked ? 'white' : theme.black)};
  font-size: 0.9rem;
  cursor: pointer;
`;

export default Genres;

const GENRES = [
  {
    genres: '에세이',
  },
  {
    genres: '자기계발',
  },
  {
    genres: '라이프스타일',
  },
  {
    genres: '소설',
  },
  {
    genres: '사회',
  },
  {
    genres: '인문',
  },
];
