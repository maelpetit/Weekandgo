package fr.istic.collectors;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import fr.istic.domain.Weather;
import fr.istic.factories.WeatherFactory;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class WeatherCollector {

    private static String api_key = "e52b9bb6d58f2dde6f191b8e1e0cd638";
    private static String api_url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=" + api_key;

    public static Set<Weather> collectWeather(double latitude, double longitude){
        try {
            URLConnection connection = new URL(api_url + "&lat=" + latitude + "&lon=" + longitude).openConnection();
            connection.setRequestProperty("Accept-Charset", "UTF-8");
            InputStream response = connection.getInputStream();
            try (Scanner scanner = new Scanner(response)) {
                String responseBody = scanner.useDelimiter("\\A").next();
                JsonObject weatherObject = new JsonParser().parse(responseBody).getAsJsonObject();
                JsonArray weatherArray = weatherObject.get("list").getAsJsonArray();
                Set<Weather> weatherSet = new HashSet<>();
                for(JsonElement weatherJson : weatherArray) {
                    weatherSet.add(WeatherFactory.getFactory().createWeather(weatherJson.getAsJsonObject()));
                }
                return weatherSet;
            }
        }
        catch (MalformedURLException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
