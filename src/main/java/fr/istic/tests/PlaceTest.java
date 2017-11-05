package fr.istic.tests;

import fr.istic.collectors.PlacesCollector;
import fr.istic.domain.Place;
import fr.istic.domain.Sport;
import fr.istic.service.PlaceService;
import fr.istic.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Configurable
public class PlaceTest {

    @Autowired
    PlaceService placeservice;

    @Autowired
    SportService sportService;

    public void placeCollectionTest(){
        Set<Place> placeSet = PlacesCollector.collectPlaces("cities.json");
        for(Place place : placeSet){
            placeservice.save(place);
        }
        System.out.println("Number of places in france = " +placeSet.size());
    }

    public void placesInSportsTest(){

        Set<String> footPlaceNames = new HashSet<>();
        footPlaceNames.add("Rennes");
        footPlaceNames.add("Lorient");
        footPlaceNames.add("Guingamp");
        footPlaceNames.add("Brest");
        Set<Place> footPlaces = new HashSet<>();
        Set<String> surfPlaceNames = new HashSet<>();
        surfPlaceNames.add("Erdeven");
        surfPlaceNames.add("Saint-Malo");
        surfPlaceNames.add("Perros-Guirec");
        surfPlaceNames.add("Saint-Lunaire");
        surfPlaceNames.add("Brest");
        Set<Place> surfPlaces = new HashSet<>();
        for(Place place : placeservice.findAll()){
            if(footPlaceNames.contains(place.getNom())){
                footPlaces.add(place);
            }else if(surfPlaceNames.contains(place.getNom())){
                surfPlaces.add(place);
            }
        }
        for(Sport sport : sportService.findAll()){
            if(sport.getTitle().equals("Football")){
                for(Place footPlace : footPlaces){
                    sport.addPlaceList(footPlace);
                }
            }else if(sport.getTitle().equals("Surf")){
                for(Place surfPlace : surfPlaces){
                    sport.addPlaceList(surfPlace);
                }
            }

            sportService.save(sport);
        }
    }
}
