import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions} from "@mui/material";
import { createBook } from "../../api/BooksApi";
import {Translation} from "react-i18next";
import * as Yup from 'yup'



const validate = Yup.object().shape({
    title: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(50)
        .required()
        .label("Title"),
    author: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(50)
        .required()
        .label("Author"),
    description: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(255)
        .required()
        .label("Description"),
    genre: Yup.string()
        .min(3, ({label, min}) => `${label} must be greater than ${min} chars`)
        .max(255)
        .required()
        .label("Genre"),
    length: Yup.number()
        .positive("Length must be positive")
        .max(255)
        .required(),
    status: Yup.string()
        .min(0)
        .max(255)
        .label("Status")
})
const AddBook = () => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [length, setLength] = React.useState("");
    const [status, setStatus] = React.useState("");


    const handleClick = () => {
        setOpen(!open);
    };

    const addNewBook = async () => {
        console.log("added something");
        await createBook(getFormData());
        handleClick();
    };


    const getFormData = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("description", description);
        formData.append("genre", genre);
        formData.append("length", length);
        formData.append("status", status)
        return formData;
    };

    return (
        <Translation>
        {(t, { i18n }) => (
        <>
            <Dialog open={open} onClose={handleClick}>
                <DialogTitle>{t("mAddNewBook")}</DialogTitle>
                <DialogContent>
                    <DialogContentText>To add new book, press ADD button</DialogContentText>
                    <TextField autoFocus margin="dense" id="title" label={t("mTitle")} type="text" fullWidth variant="standard" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <TextField autoFocus margin="dense" id="author" label={t("mAuthor")} type="text" fullWidth variant="standard" value={author} onChange={(event) => setAuthor(event.target.value)} />
                    <TextField autoFocus margin="dense" id="description" label={t("mDescription")} type="text" fullWidth variant="standard" value={description} onChange={(event) => setDescription(event.target.value)} />
                    <TextField autoFocus margin="dense" id="genre" label={t("mGenre")} type="text" fullWidth variant="standard" value={genre} onChange={(event) => setGenre(event.target.value)} />
                    <TextField autoFocus margin="dense" id="length" label={t("mLength")} type="number" fullWidth variant="standard" value={length} onChange={(event) => setLength(event.target.value)} />
                    <TextField autoFocus margin="dense" id="status" label={t("mStatus")} type="text" fullWidth variant="standard" value={status} onChange={(event) => setStatus(event.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={addNewBook}>{t("mAdd")}</Button>
                    <Button onClick={handleClick}>{t("mCancel")}</Button>
                </DialogActions>
            </Dialog>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Button variant="outlined" onClick={handleClick}>
                    {t("mAddNewBook")}
                </Button>
            </div>
        </>
        )}
        </Translation>
    );
};

export default AddBook;
