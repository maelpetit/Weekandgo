package fr.istic.web.rest;

import com.codahale.metrics.annotation.Timed;
import fr.istic.domain.Event;
import fr.istic.domain.Person;
import fr.istic.service.PersonService;
import fr.istic.utils.WeekEndCalculator;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * REST controller for requesting Event.
 */
@RestController
@RequestMapping("/api")
public class EventResource {

    private final Logger log = LoggerFactory.getLogger(PersonResource.class);

    @Autowired
    private PersonService personService;

    /**
     * GET  /event/:id : get best Event for Person id.
     *
     * @return the ResponseEntity with status 200 (OK) and best Event in body
     */
    @GetMapping("/event/{id}")
    @Timed
    public ResponseEntity<Event> getBestEventWithPersonId(@PathVariable Long id) {
        log.debug("REST request to get best Event for Person : {}", id);
        Event event = WeekEndCalculator.getEventForPerson(personService.findOne(id));
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(event));
    }
}
