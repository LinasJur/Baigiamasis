package baigiamasis.backend.utills;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;
@NoArgsConstructor(access = AccessLevel.PRIVATE)

public class DataFormater {
    public static final String DATE_MINUTE_FORMAT = "yyyy.MM.dd HH:mm";

    public static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern(DATE_MINUTE_FORMAT);

}
