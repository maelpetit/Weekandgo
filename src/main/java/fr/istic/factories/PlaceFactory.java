package fr.istic.factories;

import com.google.gson.JsonObject;
import fr.istic.domain.Place;

public class PlaceFactory {

    private static PlaceFactory _INSTANCE;

    private PlaceFactory(){
    }

    public static PlaceFactory getFactory(){
        if(_INSTANCE == null){
            _INSTANCE = new PlaceFactory();
        }
        return _INSTANCE;
    }

    public static Place createPlace(JsonObject placeJson) {
        Place place;
        String name = placeJson.get("name").getAsString();
        String country = placeJson.get("country").getAsString();
        double latitude = placeJson.get("lat").getAsDouble();
        double longitude = placeJson.get("lng").getAsDouble();

        if(country.equals("FR") && latitude > 47 && latitude < 49 && longitude < -1 && longitude > -6){
            System.out.println("latitude =" + latitude + " longitude =" + longitude);
            place = new Place();
            place.setNom(name);
            place.setLatitude(latitude);
            place.setLongitude(longitude);
            return place;
        }

        return null;
    }
}
