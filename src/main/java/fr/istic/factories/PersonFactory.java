package fr.istic.factories;

import fr.istic.domain.Person;
import fr.istic.domain.Place;
import fr.istic.domain.Sport;

import java.time.ZonedDateTime;
import java.util.*;

public class PersonFactory {

    private static PersonFactory _INSTANCE;

    private Map<String, Place> places = new HashMap<>();
    private Map<String, Sport> sports = new HashMap<>();

    private Set<Object> modifiedEntities = new HashSet<>();

    private PersonFactory(){
    }

    public static PersonFactory getFactory(){
        if(_INSTANCE == null){
            _INSTANCE = new PersonFactory();
        }
        return _INSTANCE;
    }

    public void configure(Collection<Place> places, Collection<Sport> sports){
        if(places != null && places.size() > 0){
            this.places = new HashMap<>();
            for (Place place : places){
                this.places.put(place.getNom(), place);
            }
        }

        if(sports != null && sports.size() > 0){
            this.sports = new HashMap<>();
            for (Sport sport : sports){
                this.sports.put(sport.getTitle(), sport);
            }
        }
    }

    public Person create(String firstName, String lastName, String email, String phoneNumber, ZonedDateTime birthDate, String currentPlaceName, String[] sportTitles){
        Person person = new Person();
        person.setFirstName(firstName);
        person.setLastName(lastName);
        person.setEmail(email);
        person.setPhoneNumber(phoneNumber);
        person.setBirthDate(birthDate);

        if(places.containsKey(currentPlaceName)){
            person.setCurrentPlace(places.get(currentPlaceName));
        }
        for(String sportTitle : sportTitles){
            if(sports.containsKey(sportTitle)){
                Sport sport = sports.get(sportTitle);
                sport.addPersonList(person);
                modifiedEntities.add(sport);
                person.addSportList(sport);
            }
        }
        return person;
    }
}
