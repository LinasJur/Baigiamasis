package baigiamasis.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Data
@Entity
@NoArgsConstructor
@Table(name = "BOOKS")
@AllArgsConstructor
@Setter
@Getter
@Builder
@ToString
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "AUTHOR", nullable = false)
    private String author;

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;

    @Column(name = "GENRE", nullable = false)
    private String genre;

    @Column(name = "LENGTH", nullable = false)
    private Long length;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "CREATE_DATE")
    @Builder.Default
    private LocalDateTime createDate = LocalDateTime.now();



}
