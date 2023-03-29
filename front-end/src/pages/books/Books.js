import * as React from "react";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useBook} from "../../api/BooksApi";
import { Translation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Books = () => {

    const navigate = useNavigate();
    const {  books = [] } = useBook();
    const theme = createTheme();
    const bookStatus = books.filter(book => book.status !== "");




    const noBooksElement = !books.length && (
        <Grid container spacing={4} columnSpacing={"center"} direction={"center"}>
                <Grid xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Translation>
                                {(t, { i18n }) => (
                            <Typography gutterBottom variant="h5" component="h2">
                                {t("mNotFOundBooks")}
                            </Typography>
                                )}
                            </Translation>
                        </CardContent>
                    </Card>
                </Grid>
        </Grid>
    );



    const booksElement = books.map((listBook, i) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item key={listBook} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent>
                                    <Typography>{listBook.title}</Typography>
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
                                    <Typography>{listBook.author}</Typography>
                                    <Typography>{listBook.genre}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Translation>
                                        {(t, { i18n }) => (
                                            <>
                                                <Button size="small" onClick={() => navigate(`/books/${listBook.id}`)}>{t("mView")}</Button>
                                                <Button size="small" onClick={() => navigate(`/editBook/${listBook.id}`)}>{t("mEdit")}</Button>
                                            </>
                                        )}
                                    </Translation>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    )
    );



    return (
        <Translation>
            {(t, { i18n }) => (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <main>
                        <Container sx={{ py: 8 }} maxWidth="md">
                            <Grid container spacing={4}>
                            {noBooksElement || booksElement }
                            </Grid>
                        </Container>
                    </main>
                </ThemeProvider>
            )}
        </Translation>
    );
};

export default Books;
