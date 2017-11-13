package fr.istic.utils;

import fr.istic.collectors.WeatherCollector;
import fr.istic.domain.*;
import fr.istic.log.FileLog;
import javafx.util.Pair;

import java.io.File;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class WeekEndCalculator {

    public static Event getEventForPerson(Person person){
        if(person == null){
            return null;
        }
        if(person.getDistanceMax() == null){
            return null;
        }
        Set<Event> events = new HashSet<>();
        Map<Pair<Place, Sport>, Double> map = new HashMap<>();
        for(Sport sport : person.getSportLists()){
            for(Place place : sport.getPlaceLists()){
                Double distance = Maths.distance(person.getCurrentPlace(), place);
                if(distance <= person.getDistanceMax()){
                    map.put(new Pair(place, sport), distance);
                    FileLog.log(place.getNom() + " " + sport.getTitle() + " " + distance);
                }
            }
        }

        FileLog.log("Places close enough : " + map.size());

        for (Map.Entry<Pair<Place, Sport>, Double> entry : map.entrySet()) {
            Place place = entry.getKey().getKey();
            Sport sport = entry.getKey().getValue();
            Double distance = entry.getValue();
            if(place.getWeatherSet() == null){
                place.setWeatherSet(WeatherCollector.collectWeather(place.getLatitude(), place.getLongitude()));
            }
            for(Weather weather : place.getWeatherSet()){
                if(WeatherChecker.checkWeatherWithRequirements(weather, sport.getWeatherRequired())){
                    Event event = new Event();
                    event.setDate(weather.getDate());
                    event.setDistance(distance);
                    event.setPlace(place);
                    event.setSport(sport);
                    event.setWeather(weather);
                    events.add(event);
                    FileLog.log(event);
                    break;
                }
            }
        }

        //TODO CHECKER QUEL EST LE MEILLEUR EVENT (le plus pres)
        if(events.size() <= 0){
            return null;
        }

        Event bestEvent = events.toArray(new Event[0])[0];
        for(Event event : events){
            if(Event.compare(event, bestEvent) == 1){
                bestEvent = event;
            }
        }
        FileLog.log("best event" + bestEvent.toString());
        FileLog.writeLog("bite");
        return bestEvent;
    }
}
