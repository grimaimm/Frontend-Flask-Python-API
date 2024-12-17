import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import BookCard from './BookCard'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://127.0.0.1:5001/api/books', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        alert("Failed to fetch books.");
      }
    };

    fetchBooks();
  }, []);


  return (
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-5'>
      {books.map((book, index) => (
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
          />
        </motion.div>
      ))}
    </div>
  )
}

export default BookList