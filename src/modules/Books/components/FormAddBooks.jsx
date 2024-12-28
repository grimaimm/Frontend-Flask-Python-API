import React, { useEffect, useState } from 'react';

const FormAddBooks = ({ fetchBooks, categories, handleLogout }) => {
  // const [categories, setCategories] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    category_id: ''
  });

  // // Fetch categories
  // const fetchCategories = async () => {
  //   const token = localStorage.getItem('token');

  //   try {
  //     const response = await fetch('http://127.0.0.1:5001/api/category', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();
  //     setCategories(data);
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // Handle Add Book
  const handleAddBook = async (e) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://127.0.0.1:5001/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newBook)
      });

      if (response.status === 401) {
        handleLogout(); // Hapus token dan arahkan ke login
        return;
      }

      if (response.ok) {
        alert('Book added successfully!');
        fetchBooks();
        setNewBook({
          title: '',
          author: '',
          year: '',
          category_id: ''
        });
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to add book');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding book');
    }
  };

  return (
    <div className='mb-8'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            placeholder="Author"
            className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >
            Year
          </label>
          <input
            type="number"
            id="year"
            placeholder="Year"
            className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
            value={newBook.year}
            onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            value={newBook.category_id}
            onChange={(e) =>
              setNewBook({
                ...newBook,
                category_id: parseInt(e.target.value)
              })
            }
            className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='mt-5'>
        <button
          onClick={handleAddBook}
          className="w-full px-5 py-2 text-base font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 sm:w-auto dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default FormAddBooks;
