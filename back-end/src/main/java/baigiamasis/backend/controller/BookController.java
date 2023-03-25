package baigiamasis.backend.controller;


import baigiamasis.backend.dto.BookDto;
import baigiamasis.backend.services.BookService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
@Api
public class BookController {


    private final BookService bookService;


    @GetMapping("/all")
    public List<BookDto>getAllBooks(){
        return bookService.getAllBooks();

    }

    @GetMapping("/{id}")
    public BookDto getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }


    @PostMapping("/create")
    public String createBook(@RequestParam("title") String title,
                             @RequestParam("author") String author,
                             @RequestParam("description") String description,
                             @RequestParam("genre") String genre,
                             @RequestParam("length") Long length){
        BookDto dto = BookDto.builder()
                .title(title)
                .author(author)
                .description(description)
                .genre(genre)
                .length(length)
                .build();
          return bookService.createBook(dto);
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
