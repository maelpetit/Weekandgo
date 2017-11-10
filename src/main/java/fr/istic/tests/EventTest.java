package fr.istic.tests;

import fr.istic.domain.Event;
import fr.istic.domain.Person;
import fr.istic.log.FileLog;
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
        Person person1 = personService.findOne(1L);
        Person person2 = personService.findOne(2L);
        FileLog.log(person1.toString());
        Event event1 = WeekEndCalculator.getEventForPerson(person1);
        FileLog.log("Person 1 done");
        FileLog.log(event1==null?"null":event1.toString());
        FileLog.log(person2.toString());
        Event event2 = WeekEndCalculator.getEventForPerson(person2);
        FileLog.log("Person 2 done");
        FileLog.log(event2==null?"null":event2.toString());

        FileLog.writeLog("eventTest");

    }
}
