package fr.istic.web.rest;

import com.codahale.metrics.annotation.Timed;
import fr.istic.domain.Event;
import fr.istic.domain.Person;
import fr.istic.log.FileLog;
import fr.istic.service.PersonService;
import fr.istic.service.PlaceService;
import fr.istic.service.SportService;
import fr.istic.tests.PlaceTest;
import fr.istic.tests.SportTest;
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
public class InitDBResource {

    private final Logger log = LoggerFactory.getLogger(InitDBResource.class);

    @Autowired
    private SportTest sportTest;

    @Autowired
    private PlaceTest placeTest;

    /**
     * GET  /init-db : Init
     *
     * @return the ResponseEntity with status 200 (OK) and best Event in body
     */
    @GetMapping("/init-db")
    @Timed
    public ResponseEntity initDB() {
        log.debug("REST request to initialize database");
//        placeTest.placeCollectionTest();
//        sportTest.sportCreationsTest();
//        placeTest.placesInSportsTest();
        return ResponseEntity.ok().build();
    }
}
