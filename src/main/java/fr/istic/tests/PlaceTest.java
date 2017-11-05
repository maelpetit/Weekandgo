package fr.istic.tests;

import fr.istic.collectors.PlacesCollector;
import fr.istic.domain.Place;
import fr.istic.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@Configurable
public class PlaceTest {

    @Autowired
    PlaceService placeservice;

    public void placeCollectionTest(){
        Set<Place> placeSet = PlacesCollector.collectPlaces("cities.json");
        for(Place place : placeSet){
            placeservice.save(place);
        }
        System.out.println("Number of places in france = " +placeSet.size());
    }
}
