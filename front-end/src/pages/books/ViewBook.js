import React, { useState } from 'react';
import {updateBook, useBookById} from '../../api/BooksApi';
import {useNavigate, useParams} from 'react-router-dom';
import {Translation} from "react-i18next";

const ViewBook = () => {
    const { id } = useParams();
    const { isLoading, data: book } = useBookById(id);
    const [selectedOption, setSelectedOption] = useState("reading");
    const navigate = useNavigate();
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(selectedOption)
        await updateBook(id,{...book, status:selectedOption} );
        navigate('/');
    };

    return (
        <Translation>
            {(t, { i18n }) => (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : book?.id ? (
                <div align={"center"}>
                    <h1 align={'center'}>{t("mTitle")+ (": ")}{book.title}</h1>
                    <p align={'center'}>{t("mAuthor")+ (": ")}{book.author}</p>
                    <p align={'center'}>{t("mGenre")+ (": ")}{book.genre}</p>
                    <p align={'center'}>{t("mDescription")+ (": ")}{book.description}</p>
                    <p align={'center'}>{t("mLength")+ (": ")}{book.length}</p>

                    <form onSubmit={handleSubmit} >
                        <label>
                            {t("mOption")}
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="reading">{t("mReading")}</option>
                                <option value="toRead">{t("mToRead")}</option>
                                <option value="read">{t("mRead")}</option>
                            </select>
                        </label>
                        <button type="submit">{t("mAdd")}</button>
                    </form>

                </div>
            ) : (
                <div>{t("mNotFOund")}</div>
            )}
        </>
         )}
        </Translation>
    );
};

export default ViewBook;
