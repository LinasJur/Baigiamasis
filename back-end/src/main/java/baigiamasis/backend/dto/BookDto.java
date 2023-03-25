package baigiamasis.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import static baigiamasis.backend.utills.DataFormater.DATE_MINUTE_FORMAT;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {

    private Long id;
    private String title;
    private String author;
    private String description;
    private String genre;
    private Long length;
    private String status;

    @JsonFormat(pattern = DATE_MINUTE_FORMAT )
    private LocalDateTime createDate;
}
