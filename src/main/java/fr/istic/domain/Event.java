package fr.istic.domain;

import java.time.ZonedDateTime;

public class Event {

    private ZonedDateTime date;
    private Place place;
    private Sport sport;
    private Weather weather;
    private Double distance;

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public Sport getSport() {
        return sport;
    }

    public void setSport(Sport sport) {
        this.sport = sport;
    }

    public Weather getWeather() {
        return weather;
    }

    public void setWeather(Weather weather) {
        this.weather = weather;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    /**
     * Compares 2 events
     * @param event1
     * @param event2
     * @return 1 if event1 > event2, -1 if event1 < event2 and 0 if equals
     *
     */
    public static int compare(Event event1 , Event event2){
        if(event1.getDistance() < event2.getDistance()){
            return 1;
        }
        if(event1.getDistance() > event2.getDistance()){
            return -1;
        }
        return 0;
    }

    @Override
    public String toString(){
        String res = "Event{" +
            "date=" + date.toString() +
            ", place=" + place.toString() +
            ", distance=" + distance +
            ", sport=" + sport.toString() +
            ", weather=" + weather.toString() +
            "}";
        return res;
    }
}
