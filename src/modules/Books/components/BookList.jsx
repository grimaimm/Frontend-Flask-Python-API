import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import BookCard from './BookCard'
import Pagination from '../../../components/Elements/Pagination';

const BookList = ({ books, handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination Logic
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const paginationBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {/* Card Book */}
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-5'>
        {paginationBooks.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              category={book.category}
              onEdit={() => handleEdit(book)}
              onDelete={() => handleDelete(book.id)}
            />
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />

    </>
  )
}

export default BookList