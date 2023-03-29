import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBookById, updateBook } from '../../api/BooksApi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
const EditBook = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { isLoading, data: book } = useBookById(id);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [length, setLength] = useState(0);
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        setTitle(book?.title ?? '');
        setAuthor(book?.author ?? '');
        setDescription(book?.description ?? '');
        setGenre(book?.genre ?? '');
        setLength(book?.length ?? 0);
    }, [book]);


    const handleEdit = async () => {
        const updatedBook = { ...book, title, author, description, genre, length  };
        await updateBook(id, updatedBook);
        handleClose();
        navigate('/');
    };

    const handleClose = () => {
        setOpen(false);

    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{t('mEditBook')}</DialogTitle>
            <DialogContent>
                <DialogContentText>{t('mToEditBook')}</DialogContentText>
                <TextField autoFocus margin="dense" id="title" label={t('mTitle')} type="text" fullWidth variant="standard" value={title} onChange={(event) => setTitle(event.target.value)} />
                <TextField autoFocus margin="dense" id="author" label={t('mAuthor')} type="text" fullWidth variant="standard" value={author} onChange={(event) => setAuthor(event.target.value)} />
                <TextField autoFocus margin="dense" id="description" label={t('mDescription')} type="text" fullWidth variant="standard" value={description} onChange={(event) => setDescription(event.target.value)} />
                <TextField autoFocus margin="dense" id="genre" label={t('mGenre')} type="text" fullWidth variant="standard" value={genre} onChange={(event) => setGenre(event.target.value)} />
                <TextField autoFocus margin="dense" id="length" label={t('mLength')} type="number" fullWidth variant="standard" value={length} onChange={(event) => setLength(parseInt(event.target.value))} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEdit}>{t('mSave')}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBook;
