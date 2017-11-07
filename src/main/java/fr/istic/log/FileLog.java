package fr.istic.log;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Date;

public class FileLog {

    private static FileLog ourInstance = new FileLog();

    public static FileLog getInstance() {
        return ourInstance;
    }

    private FileLog() {
    }

    private String content = "";

    public void log(String message){
        content += message + "\n\n";
    }

    public void writeLog(String fileName){
        FileWriter fw = null;
        try {
            fw = new FileWriter(new File("logs/" + LocalDateTime.now().toString() + "-" + fileName));
            fw.write(content);
            fw.flush();
            fw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        content = "";
    }
}
