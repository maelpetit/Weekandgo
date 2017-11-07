package fr.istic.tests;

import fr.istic.domain.Event;
import fr.istic.service.PersonService;
import fr.istic.utils.WeekEndCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Service
@Configurable
public class EventTest {

    @Autowired
    private PersonService personService;

    public void eventTest() {
        Event event1 = WeekEndCalculator.getEventForPerson(personService.findOne(1L));
        System.out.println(event1);
        Event event2 = WeekEndCalculator.getEventForPerson(personService.findOne(2L));
        System.out.println(event2);


    }
}
