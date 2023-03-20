package baigiamasis.backend.controller;

import baigiamasis.backend.dto.CommentDTO;
import baigiamasis.backend.services.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping()
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/allComments")
    public List<CommentDTO>getAllComments(){
        return commentService.getAllComments();
    }

    @PostMapping("/createComment")
    public String createComment(@RequestBody CommentDTO commentDTO){
        return commentService.createComment(commentDTO);
    }

}
