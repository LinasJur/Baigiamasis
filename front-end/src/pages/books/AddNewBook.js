import * as React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions} from "@mui/material";
import { createBook } from "../../api/BooksApi";
import {Translation} from "react-i18next";
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

const validationSchema = Yup.object().shape({
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
        .max(5000)
        .required()
})
const AddBook = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            description: "",
            genre: "",
            length: "",
            status: "",
            touched: {
                title: false,
                author: false,
                description: false,
                genre: false,
                length: false,
                status: false,
            },
        },
        validationSchema,
        onSubmit: async (values, { setTouched }) => {
            setTouched({
                title: true,
                author: true,
                description: true,
                genre: true,
                length: true,
                status: true,
            });
            if (formik.isValid) {
                console.log("added something");
                await createBook(getFormData(values));
                handleClose();
            }
        },
    });

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    const getFormData = (values) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("author", values.author);
        formData.append("description", values.description);
        formData.append("genre", values.genre);
        formData.append("length", values.length);
        return formData;
    };

    return (
        <Translation>
        {(t, { i18n }) => (
        <>
                <DialogContent>
                    <DialogContentText>{t("mAddBookText")}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label={t("mTitle")}
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("title")}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="author"
                        label={t("mAuthor")}
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("author")}
                        onBlur={formik.handleBlur}
                        error={formik.touched.author && Boolean(formik.errors.author)}
                        helperText={formik.touched.author && formik.errors.author}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label={t("mDescription")}
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("description")}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="genre"
                        label={t("mGenre")}
                        type="text"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("genre")}
                        onBlur={formik.handleBlur}
                        error={formik.touched.genre && Boolean(formik.errors.genre)}
                        helperText={formik.touched.genre && formik.errors.genre}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="length"
                        label={t("mLength")}
                        type="number"
                        fullWidth
                        variant="standard"
                        {...formik.getFieldProps("length")}
                        onBlur={formik.handleBlur}
                        error={formik.touched.length && Boolean(formik.errors.length)}
                        helperText={formik.touched.length && formik.errors.length}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={formik.handleSubmit}>{t("mAdd")}</Button>
                </DialogActions>
        </>
        )}
        </Translation>
    );
};

export default AddBook;
