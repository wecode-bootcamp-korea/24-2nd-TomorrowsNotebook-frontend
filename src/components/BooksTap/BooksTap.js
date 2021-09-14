import React, { useEffect, useState } from 'react';
import BookLayout from './BookLayout';
import Books from './Books';
import { customFetch } from '../../utils/api.js';
import { BOOK_URL } from '../../config';

const BooksTap = ({ title, query, goToDetail }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = new URL(query.path, BOOK_URL);
    url.searchParams.set('search', query.search);
    url.searchParams.set('limit', query.limit);
    customFetch(
      url.toString(),
      {},
      {
        onSuccess: res => setBooks(res.RESULT),
      }
    );
  }, []);

  return (
    <BookLayout title={title}>
      <Books books={books} goToDetail={goToDetail} />
    </BookLayout>
  );
};

export default BooksTap;
