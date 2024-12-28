import React, { useEffect, useState } from 'react'
import BookList from './BookList'
import HeadingPage from '../../../components/Elements/HeadingPage'
import { BreadcrumbBookPage } from './BooksBreadcrumb'
import FormAddBooks from './FormAddBooks'
import Swal from 'sweetalert2'
import BookModalEdit from './BookModalEdit'

const Books = ({ handleLogout, ...props }) => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [editedBook, setEditedBook] = useState({});

  // Fungsi fetchBooks
  const fetchBooks = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://127.0.0.1:5001/api/books', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        handleLogout(); // Hapus token dan arahkan ke login
        return;
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      alert('Failed to fetch books.');
    }
  };

  // Fungsi fetchCategories
  const fetchCategories = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://127.0.0.1:5001/api/category', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        handleLogout(); // Hapus token dan arahkan ke login
        return;
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Panggil fetchBooks saat komponen dimount
  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  // Handle Delete Book
  const handleDelete = async (bookId) => {
    const token = localStorage.getItem('token');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      background: '#27272a',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      backdrop: 'rgba(0,0,0,0.6)'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://127.0.0.1:5001/api/books/${bookId}`,
            {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

          if (response.ok) {
            Swal.fire(
              'Deleted!',
              'Your book has been deleted.',
              'success'
            );
            fetchBooks();
          } else {
            const error = await response.json();
            Swal.fire('Error', error.message || 'Failed to delete book.', 'error');
          }
        } catch (error) {
          Swal.fire('Error', 'Failed to delete book.', 'error');
        }
      }
    });
  };

  // Handle Edit Book
  const handleEdit = (book) => {
    setSelectedBook(book);
    setEditedBook({ ...book });
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(`http://127.0.0.1:5001/api/books/${selectedBook.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editedBook)
      });

      if (response.ok) {
        Swal.fire(
          'Success',
          'Book updated successfully!',
          'success'
        )
        setSelectedBook(null);
        fetchBooks();
      } else {
        const error = await response.json();
        Swal.fire('Error', error.message || 'Failed to update book.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to update book.', 'error');
    }
  };

  return (
    <>
      <div {...props}>
        <BreadcrumbBookPage />
        <HeadingPage title="Add Book" />
        <FormAddBooks
          fetchBooks={fetchBooks}
          categories={categories}
          handleLogout={handleLogout}
        />
        <HeadingPage title="Book Lists" />
        <BookList
          books={books}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      {selectedBook && (
        <BookModalEdit
          setSelectedBook={setSelectedBook}
          editedBook={editedBook}
          setEditedBook={setEditedBook}
          handleSave={handleSave}
          categories={categories}
        />
      )}
    </>
  )
}

export default Books