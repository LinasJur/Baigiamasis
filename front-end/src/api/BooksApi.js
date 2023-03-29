import HTTP from "./";
import { useMutation, useQuery } from "react-query";

const getBooks = () =>
    HTTP.get("/books/all")
        .then((response) => response.data)
        .catch((error) => console.log(error.message));

const getBookById = (bookId) =>
    HTTP.get(`/books/${bookId}`)
        .then((response) => response.data)
        .catch((error) => console.log(error.message));


const createBook = (book) => HTTP.post("/books/create", book);



const updateBook = (bookId, book) => {
    return HTTP.put(`/books/${bookId}`, book)
        .then((response) => response.data)
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                throw new Error('Bad request. Please check your input.');
            } else {
                console.log(error.message);
            }
        });
};

const useBook = () => {
    const context = useQuery("getBooks", getBooks);
    return { ...context, books: context.data };
};

const useBookById = (bookId) => {
    const context = useQuery(["book", bookId], () => getBookById(bookId));
    return { ...context, book: context.data };
};


export { createBook, updateBook, useBook, useBookById,  };
