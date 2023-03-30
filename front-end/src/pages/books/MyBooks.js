import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Translation} from "react-i18next";
import {useBook} from "../../api/BooksApi";
import books from "./Books";
import {useState} from "react";
import {useNavigate} from "react-router-dom";





const theme = createTheme();

export default function MyBooks() {

    const [selectedStatus, setSelectedStatus] = useState("reading");
    const navigate = useNavigate();
    const {  books = [] } = useBook();
    const reading = books.filter(book => book.status == "reading");
    const toRead = books.filter(book => book.status == "toRead");
    const read = books.filter(book => book.status == "read");
    const filteredBooks = selectedStatus === "reading" ? reading : selectedStatus === "toRead" ? toRead : read;


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Translation>
                                {(t, { i18n }) => (
                                    <>
                                        <Button variant="contained" onClick={() => setSelectedStatus("reading")}>{t("mReading")}</Button>
                                        <Button variant="contained" onClick={() => setSelectedStatus("toRead")}>{t("mToRead")}</Button>
                                        <Button variant="contained" onClick={() => setSelectedStatus("read")}>{t("mRead")}</Button>
                                    </>
                                )}
                            </Translation>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {filteredBooks.map((book) => (
                            <Grid item key={book.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography> <h1>{book.title}</h1></Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography>{book.author}</Typography>
                                        <Typography>{book.genre}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Translation>
                                            {(t, { i18n }) => (
                                                <>
                                                    <Button size="small" onClick={() => navigate(`/books/${book.id}`)}>{t("mView")}</Button>
                                                    <Button size="small" onClick={() => navigate(`/editBook/${book.id}`)}>{t("mEdit")}</Button>
                                                </>
                                            )}
                                        </Translation>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            </Box>
        </ThemeProvider>
    );
}
