import {Route, Routes} from "react-router-dom";
import MyBooks from "../../pages/books/MyBooks";
import Books from "../../pages/books/Books"
import Signup from "../../pages/Signup";
import ViewBook from "../../pages/books/ViewBook";
import AddNewBook from "../../pages/books/AddNewBook"
import EditBook from "../../pages/books/EditBook";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Books />}/>
        <Route path="/myBooks" element={<MyBooks/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/books/:id" element={<ViewBook />}/>
        <Route path="/addNewBook" element={<AddNewBook />}/>
        <Route path="/editBook/:id" element={<EditBook />}/>
    </Routes>
)

export default Pages