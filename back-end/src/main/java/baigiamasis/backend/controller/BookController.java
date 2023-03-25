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

    @PutMapping("{id}")
    public String updateBookById(@PathVariable Long id,
                                 @RequestParam("title") String title,
                                 @RequestParam("author") String author,
                                 @RequestParam("description") String description,
                                 @RequestParam("genre") String genre,
                                 @RequestParam("length") Long length) {
        BookDto dto = BookDto.builder()
                .id(id)
                .title(title)
                .author(author)
                .description(description)
                .genre(genre)
                .length(length)
                .build();
        return bookService.updateBook(dto);
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



}
