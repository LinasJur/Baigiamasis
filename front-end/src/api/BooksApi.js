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

const createBookJson = (book) =>
    HTTP.post("/books/create", { ...book, title: book.bookTitle }).then(
        (response) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(response.data), 5000);
            })
    );

const useBook = () => {
    const context = useQuery("getBooks", getBooks);
    return { ...context, books: context.data };
};

const useBookById = (bookId) => {
    const context = useQuery(["book", bookId], () => getBookById(bookId));
    return { ...context, book: context.data };
};

const useCreateBook = (config) => {
    const mutation = useMutation(createBookJson, config);
    return mutation.mutateAsync;
};

export { createBook, useBook, useBookById, useCreateBook };
