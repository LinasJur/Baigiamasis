package baigiamasis.backend.repositories.impl;


import baigiamasis.backend.model.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@RequiredArgsConstructor
public class BookRepositoryImpl {

    private final JdbcTemplate jdbcTemplate;

    public List<Book> getAllBooks(){
        String sql = "SELECT * FROM BOOKS";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Book.class));
    }

}
