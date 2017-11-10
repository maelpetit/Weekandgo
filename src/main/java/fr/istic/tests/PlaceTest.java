package fr.istic.tests;

import fr.istic.collectors.PlacesCollector;
import fr.istic.domain.Place;
import fr.istic.domain.Sport;
import fr.istic.log.FileLog;
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

        /*Set<String> footPlaceNames = new HashSet<>();
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
        Set<String> volleyPlaceNames = new HashSet<>();
        volleyPlaceNames.add("Vannes");
        volleyPlaceNames.add("Saint-Brieuc");
        volleyPlaceNames.add("Morlaix");
        volleyPlaceNames.add("Quimper");
        Set<Place> volleyPlaces = new HashSet<>();*/
        Set<String> kitesurfPlaceNames = new HashSet<>();
        kitesurfPlaceNames.add("Erdeven");
        kitesurfPlaceNames.add("Saint-Malo");
        kitesurfPlaceNames.add("Perros-Guirec");
        kitesurfPlaceNames.add("Saint-Lunaire");
        kitesurfPlaceNames.add("Brest");
        Set<Place> kitesurfPlaces = new HashSet<>();
        for(Place place : placeservice.findAll()){
            /*if(footPlaceNames.contains(place.getNom())){
                footPlaces.add(place);
            }else if(surfPlaceNames.contains(place.getNom())){
                surfPlaces.add(place);
            }else if(volleyPlaceNames.contains(place.getNom())){
                volleyPlaces.add(place);
            }else */if(kitesurfPlaceNames.contains(place.getNom())){
                kitesurfPlaces.add(place);
            }
        }

        FileLog.log(/*"foot:" + footPlaces.size() + " beach volley:" + volleyPlaces.size()
        + " surf:" + surfPlaces.size() + */" kite:" + kitesurfPlaces.size());
        for(Sport sport : sportService.findAll()){
            /*if(sport.getTitle().equals("Football")){
                for(Place footPlace : footPlaces){
                    sport.addPlaceList(footPlace);
                }
            }else if(sport.getTitle().equals("Surf")){
                for(Place surfPlace : surfPlaces){
                    sport.addPlaceList(surfPlace);
                }
            }else if(sport.getTitle().equals("Beach Volley")){
                for(Place volleyPlace : volleyPlaces){
                    sport.addPlaceList(volleyPlace);
                }
            }else*/ if(sport.getTitle().equals("Kite Surf")){
                for(Place kitesurfPlace : kitesurfPlaces){
                    sport.addPlaceList(kitesurfPlace);
                }
            }

            sportService.save(sport);
        }
        FileLog.writeLog("placesInSportsTest.txt");
    }
}
