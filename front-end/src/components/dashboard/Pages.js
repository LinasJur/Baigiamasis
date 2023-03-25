import {Route, Routes} from "react-router-dom";
import MyBooks from "../../pages/MyBooks";
import Search from "../../pages/Search";
import Books from "../../pages/Books"
import Signup from "../../pages/Signup";
import ViewBook from "../../pages/ViewBook";
import AddNewBook from "../../pages/books/AddNewBook"
import EditBook from "../../pages/books/EditBook";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Books />}/>
        <Route path="/myBooks" element={<MyBooks/>}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/books/:id" element={<ViewBook />}/>
        <Route path="/addNewBook" element={<AddNewBook />}/>
        <Route path="/editBook/:id" element={<EditBook />}/>
    </Routes>
)

export default Pages