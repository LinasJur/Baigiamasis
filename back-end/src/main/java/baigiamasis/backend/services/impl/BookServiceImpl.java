package baigiamasis.backend.services.impl;

import baigiamasis.backend.model.Book;
import baigiamasis.backend.dto.BookDto;
import baigiamasis.backend.repositories.BookRepository;
import baigiamasis.backend.services.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public List<BookDto> getAllBooks() {
        return mapToDto(bookRepository.getAllBooks());
    }

    private List<BookDto> mapToDto(Collection<Book> entities) {
        return entities.stream()
                .map(o -> BookDto.builder()
                        .id(o.getId())
                        .title(o.getTitle())
                        .author(o.getAuthor())
                        .description(o.getDescription())
                        .genre(o.getGenre())
                        .length(o.getLength())
                        .price(o.getPrice())
                        .comment(o.getComment())
                        .createDate(o.getCreateDate())
                        .build())
                .collect(Collectors.toList());

    }

    @Override
    public String createBook(BookDto bookDto) {
        Book newBook = buildNewBook(bookDto);
        bookRepository.save(newBook);
        return newBook.getId() != null ? "success" : "failed";
    }

    private Book buildNewBook(BookDto bookDto) {
        return Book.builder()
                .author(bookDto.getAuthor())
                .title(bookDto.getTitle())
                .description(bookDto.getDescription())
                .genre(bookDto.getGenre())
                .length(bookDto.getLength())
                .price(bookDto.getPrice())
                .comment(bookDto.getComment())
                .build();
    }
}
