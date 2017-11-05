package fr.istic.random;

import fr.istic.collectors.PlacesCollector;
import fr.istic.domain.Place;
import org.junit.Test;
import java.util.Set;

public class PlaceTest {

    @Test
    public void placeCollectionTest(){
        Set<Place> placeSet = PlacesCollector.collectPlaces("cities.json");
        System.out.println("Number of places in france = " +placeSet.size());
    }
}
