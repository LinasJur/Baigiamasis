package baigiamasis.backend.services.impl;

import baigiamasis.backend.dto.CommentDTO;
import baigiamasis.backend.model.Comment;
import baigiamasis.backend.repositories.CommentRepository;
import baigiamasis.backend.services.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentServiceImpl implements CommentService {
    private final CommentRepository commentRepository;

    @Override
    public List<CommentDTO> getAllComments() {
        return mapToDto(commentRepository.getAllComments());
    }



    private List<CommentDTO> mapToDto(Collection<Comment> entities) {
        return entities.stream()
                .map(o -> CommentDTO.builder()
                        .id(o.getId())
                        .comment(o.getComment())
                        .build())
                .collect(Collectors.toList());
    }
    @Override
    public String createComment(CommentDTO commentDTO) {
        Comment newComment = buildNewComment(commentDTO);
        commentRepository.save(newComment);
        return newComment.getId() != null ? "success" : "failed";
    }

    private Comment buildNewComment(CommentDTO commentDTO) {
        return Comment.builder()
                .id(commentDTO.getId())
                .comment(commentDTO.getComment())
                .build();
    }

}
