package baigiamasis.backend.services.impl;

import baigiamasis.backend.dto.BookDto;
import baigiamasis.backend.model.Book;
import baigiamasis.backend.repositories.BookRepository;
import baigiamasis.backend.services.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
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
                        .status(o.getStatus())
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

    @Override
    public BookDto getBookById(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            return mapToDto(book);
        }
        return null;
    }

    @Override
    public String updateBook(BookDto bookDto) {
        Optional<Book> optionalBook = bookRepository.findById(bookDto.getId());
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(bookDto.getTitle());
            book.setAuthor(bookDto.getAuthor());
            book.setDescription(bookDto.getDescription());
            book.setGenre(bookDto.getGenre());
            book.setLength(bookDto.getLength());
            book.setStatus(bookDto.getStatus());
            bookRepository.save(book);
            return "Book with ID " + book.getId() + " has been updated successfully.";
        } else {
            return "Book not found.";
        }
    }


    private BookDto mapToDto(Book entity) {
        return BookDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .author(entity.getAuthor())
                .description(entity.getDescription())
                .genre(entity.getGenre())
                .length(entity.getLength())
                .status(entity.getStatus())
                .createDate(entity.getCreateDate())
                .build();
    }

    private Book buildNewBook(BookDto bookDto) {
        return Book.builder()
                .author(bookDto.getAuthor())
                .title(bookDto.getTitle())
                .description(bookDto.getDescription())
                .genre(bookDto.getGenre())
                .status(bookDto.getStatus())
                .length(bookDto.getLength())
                .build();
    }
}
