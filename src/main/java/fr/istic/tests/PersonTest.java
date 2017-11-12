package fr.istic.tests;

import fr.istic.domain.Person;
import fr.istic.domain.Place;
import fr.istic.factories.PersonFactory;
import fr.istic.service.PersonService;
import fr.istic.service.PlaceService;
import fr.istic.service.SportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@Service
@Configurable
public class PersonTest {

    @Autowired
    private PersonService personService;

    @Autowired
    private PlaceService placeService;

    @Autowired
    private SportService sportService;

    public void personTest(){
        PersonFactory factory = PersonFactory.getFactory();
        factory.configure(placeService.findAll(), sportService.findAll());

        ZonedDateTime date1 = ZonedDateTime.of(1994, 8, 18, 0, 0, 0, 0, ZoneId.systemDefault());
        ZonedDateTime date2 = ZonedDateTime.of(1992, 1, 8, 0, 0, 0, 0, ZoneId.systemDefault());
        String[] sports1 = {"Surf", "Beach Volley"};
        String[] sports2 = {"Football", "Kite Surf"};
        Person mael = factory.create("Maël", "Petit", "mael.petit@wanadoo.fr", "12", date1, "Rennes", sports1, 300D);
        Person jules = factory.create("Jules", "Paget", "jules.v.paget@gmail.com", "13", date2, "Lorient", sports2, 400D);

        System.out.println(mael);
        System.out.println(jules);
        personService.save(mael);
        personService.save(jules);
    }

    public void personEdit(){
        personService.findOne(1L).setDistanceMax(300D);
        personService.findOne(2L).setDistanceMax(400D);
    }

    public void personAddPlace(){
        Person person = personService.findOne(1L);
        Place place = placeService.findOne(425L);
        person.setCurrentPlace(place);

        personService.save(person);
    }
}
