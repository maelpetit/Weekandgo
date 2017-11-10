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

    public static void log(String message){
        getInstance().content += message + "\n";
    }

    public static void log(Object object){
        if(object != null){
            log("null");
        }else{
            log(object.toString());
        }
    }

    public static void writeLog(String fileName){
        FileLog instance = getInstance();
        try {
            File file = new File("logs/" + fileName + "-" + LocalDateTime.now().toString() + ".log");
            file.createNewFile();
            FileWriter fw = new FileWriter(file);
            fw.write(instance.content);
            fw.flush();
            fw.close();
            instance.content = "";
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
