import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import MyBooks from "../../pages/MyBooks";
import Search from "../../pages/Search";
import Books from "../../pages/books/Books"
import Signup from "../../pages/Signup";
import ViewBook from "../../pages/books/ViewBook";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/myBooks" element={<MyBooks/>}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/books/:id" element={<ViewBook />}/>
    </Routes>
)

export default Pages