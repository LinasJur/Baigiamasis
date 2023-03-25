package baigiamasis.backend.repositories;


import baigiamasis.backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    @Query(value = "SELECT * FROM BOOKS", nativeQuery = true)
    List<Book> getAllBooks();


}
