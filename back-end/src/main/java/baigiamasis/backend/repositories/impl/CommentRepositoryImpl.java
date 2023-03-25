package baigiamasis.backend.repositories.impl;

import baigiamasis.backend.model.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@RequiredArgsConstructor
public class CommentRepositoryImpl {
    private final JdbcTemplate jdbcTemplate;

    public List<Comment> getAllComments(){
        String sql = "SELECT * FROM COMMENTS";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Comment.class));
    }
}
