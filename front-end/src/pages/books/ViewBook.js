import React from 'react';
import { useBookById } from '../../api/BooksApi';
import { useParams } from 'react-router-dom';

const ViewBook = () => {
    const { id } = useParams();
    const { isLoading, data: book } = useBookById(id);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : book?.id ? (
                <div>
                    <h1>{book.title}</h1>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p>{book.description}</p>
                    <p>{book.published}</p>
                </div>
            ) : (
                <div>Book not found</div>
            )}
        </>
    );
};

export default ViewBook;
