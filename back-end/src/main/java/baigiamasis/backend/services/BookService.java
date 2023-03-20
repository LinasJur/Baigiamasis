package baigiamasis.backend.services;

import baigiamasis.backend.dto.BookDto;

import java.util.List;

public interface BookService {
    List<BookDto> getAllBooks();
    String createBook(BookDto bookDto);


}
