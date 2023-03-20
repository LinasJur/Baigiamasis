package baigiamasis.backend.services;

import baigiamasis.backend.dto.CommentDTO;

import java.util.List;

public interface CommentService {
    List<CommentDTO> getAllComments();
    String createComment(CommentDTO commentDTO);
}
