import React from 'react';
import BookLayout from './BookLayout';
import Books from './Books';

const BooksTap = ({ title }) => (
  <BookLayout title={title}>
    <Books />
  </BookLayout>
);

export default BooksTap;
