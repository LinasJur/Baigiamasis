import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBookById, updateBook } from '../../api/BooksApi';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const EditBook = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { isLoading, data: book } = useBookById(id);
    const [title, setTitle] = useState(book?.title ?? '');
    const [author, setAuthor] = useState(book?.author ?? '');
    const [description, setDescription] = useState(book?.description ?? '');
    const [genre, setGenre] = useState(book?.genre ?? '');
    const [length, setLength] = useState(book?.length ?? 0);
    const [status, setStatus] = useState(book?.status ?? '');

    const handleEdit = async () => {
        const updatedBook = { ...book, title, author, description, genre, length, status };
        await updateBook(updatedBook);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Dialog open={true}>
            <DialogTitle>{t('mEditBook')}</DialogTitle>
            <DialogContent>
                <DialogContentText>{t('mToEditBook')}</DialogContentText>
                <TextField autoFocus margin="dense" id="title" label={t('mTitle')} type="text" fullWidth variant="standard" value={book?.title ?? ""} onChange={(event) => setTitle(event.target.value)} />
                <TextField autoFocus margin="dense" id="author" label={t('mAuthor')} type="text" fullWidth variant="standard" value={book?.author ?? ""} onChange={(event) => setAuthor(event.target.value)} />
                <TextField autoFocus margin="dense" id="description" label={t('mDescription')} type="text" fullWidth variant="standard" value={book?.description ?? ""} onChange={(event) => setDescription(event.target.value)} />
                <TextField autoFocus margin="dense" id="genre" label={t('mGenre')} type="text" fullWidth variant="standard" value={book?.genre ?? ""} onChange={(event) => setGenre(event.target.value)} />
                <TextField autoFocus margin="dense" id="length" label={t('mLength')} type="number" fullWidth variant="standard" value={book?.length ?? ""} onChange={(event) => setLength(event.target.value)} />
                <TextField autoFocus margin="dense" id="status" label={t('mStatus')} type="text" fullWidth variant="standard" value={book?.status ?? ""} onChange={(event) => setStatus(event.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEdit}>{t('mSave')}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBook;
