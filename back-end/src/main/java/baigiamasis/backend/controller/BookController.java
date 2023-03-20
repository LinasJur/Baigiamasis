package baigiamasis.backend.controller;


import baigiamasis.backend.dto.BookDto;
import baigiamasis.backend.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping()
public class BookController {


    private final BookService bookService;


    @GetMapping("/all")
    public List<BookDto>getAllBooks(){
        return bookService.getAllBooks();

    }



    @PostMapping("/create")
    public String createBook(@RequestBody BookDto bookDto) {
          return bookService.createBook(bookDto);
    }

//   @PostMapping("/updateBookById/{id}")
//   public ResponseEntity<Book> updateBookById(@PathVariable Long id, @RequestBody Book newBook){
//       Optional<Book> oldData = bookRepository.findById(id);

//       if (oldData.isPresent()){

//           Book newBookData = oldData.get();

//           newBookData.setTitle(newBook.getTitle());
//           newBookData.setAuthor(newBook.getAuthor());
//           newBookData.setDescription(newBook.getDescription());
//           newBookData.setGenre(newBook.getGenre());
//           newBookData.setLength(newBook.getLength());
//           newBookData.setPrice(newBook.getPrice());
//           newBookData.setComment(newBook.getComment());

//           Book bookData = bookRepository.save(newBookData);
//           return new ResponseEntity<>(bookData, HttpStatus.OK);
//       }

//       return new ResponseEntity<>(HttpStatus.NOT_FOUND);

//   }

//   @DeleteMapping("/deleteBookById/{id}")
//   public ResponseEntity<HttpStatus> deleteBookById(@PathVariable Long id) {

//       bookRepository.deleteById(id);
//       return new ResponseEntity<>(HttpStatus.OK);
//   }


}
