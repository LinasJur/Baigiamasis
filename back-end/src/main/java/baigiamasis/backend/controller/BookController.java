package baigiamasis.backend.controller;


import baigiamasis.backend.model.Book;
import baigiamasis.backend.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class BookController {


    @Autowired
    private BookRepository bookRepository;



    @GetMapping("/all")
    public ResponseEntity<List<Book>> getAllBooks(){
        try {
            List<Book> bookList = new ArrayList<>();
            bookRepository.findAll().forEach(bookList::add);

            if(bookList.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(bookList, HttpStatus.OK);

        } catch (Exception exception) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/addBook")
    public ResponseEntity<Book> addBook(@RequestBody Book book){

        Book bookToSave = bookRepository.save(book);
        return new ResponseEntity<>(bookToSave, HttpStatus.OK);

    }

    @PostMapping("/updateBookById/{id}")
    public ResponseEntity<Book> updateBookById(@PathVariable Long id, @RequestBody Book newBook){
        Optional<Book> oldData = bookRepository.findById(id);

        if (oldData.isPresent()){

            Book newBookData = oldData.get();

            newBookData.setTitle(newBook.getTitle());
            newBookData.setAuthor(newBook.getAuthor());
            newBookData.setDescription(newBook.getDescription());
            newBookData.setGenre(newBook.getGenre());
            newBookData.setLength(newBook.getLength());
            newBookData.setPrice(newBook.getPrice());
            newBookData.setComment(newBook.getComment());

            Book bookData = bookRepository.save(newBookData);
            return new ResponseEntity<>(bookData, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @DeleteMapping("/deleteBookById/{id}")
    public ResponseEntity<HttpStatus> deleteBookById(@PathVariable Long id) {

        bookRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
