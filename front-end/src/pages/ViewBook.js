import React from 'react';
import { useBookById } from '../api/BooksApi';
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
                    <h1 align={"center"}>{book.title}</h1>
                    <p align={"center"}>{book.author}</p>
                    <p align={"center"}>{book.genre}</p>
                    <p align={"center"}>{book.description}</p>
                    <p align={"center"}>{book.length}</p>
                </div>
            ) : (
                <div>Book not found</div>
            )}
        </>
    );
};

export default ViewBook;
