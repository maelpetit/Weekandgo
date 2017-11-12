package fr.istic.web.rest;

import com.codahale.metrics.annotation.Timed;
import fr.istic.domain.WeatherRequirements;
import fr.istic.service.WeatherRequirementsService;
import fr.istic.tests.PersonTest;
import fr.istic.tests.PlaceTest;
import fr.istic.tests.SportTest;
import fr.istic.web.rest.errors.BadRequestAlertException;
import fr.istic.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing WeatherRequirements.
 */
@RestController
@RequestMapping("/api")
public class WeatherRequirementsResource {

    private final Logger log = LoggerFactory.getLogger(WeatherRequirementsResource.class);

    private static final String ENTITY_NAME = "weatherRequirements";


    private final WeatherRequirementsService weatherRequirementsService;

    public WeatherRequirementsResource(WeatherRequirementsService weatherRequirementsService) {
        this.weatherRequirementsService = weatherRequirementsService;
    }

    /**
     * POST  /weather-requirements : Create a new weatherRequirements.
     *
     * @param weatherRequirements the weatherRequirements to create
     * @return the ResponseEntity with status 201 (Created) and with body the new weatherRequirements, or with status 400 (Bad Request) if the weatherRequirements has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/weather-requirements")
    @Timed
    public ResponseEntity<WeatherRequirements> createWeatherRequirements(@RequestBody WeatherRequirements weatherRequirements) throws URISyntaxException {
        log.debug("REST request to save WeatherRequirements : {}", weatherRequirements);
        if (weatherRequirements.getId() != null) {
            throw new BadRequestAlertException("A new weatherRequirements cannot already have an ID", ENTITY_NAME, "idexists");
        }
        WeatherRequirements result = weatherRequirementsService.save(weatherRequirements);
        return ResponseEntity.created(new URI("/api/weather-requirements/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /weather-requirements : Updates an existing weatherRequirements.
     *
     * @param weatherRequirements the weatherRequirements to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated weatherRequirements,
     * or with status 400 (Bad Request) if the weatherRequirements is not valid,
     * or with status 500 (Internal Server Error) if the weatherRequirements couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/weather-requirements")
    @Timed
    public ResponseEntity<WeatherRequirements> updateWeatherRequirements(@RequestBody WeatherRequirements weatherRequirements) throws URISyntaxException {
        log.debug("REST request to update WeatherRequirements : {}", weatherRequirements);
        if (weatherRequirements.getId() == null) {
            return createWeatherRequirements(weatherRequirements);
        }
        WeatherRequirements result = weatherRequirementsService.save(weatherRequirements);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, weatherRequirements.getId().toString()))
            .body(result);
    }

    /**
     * GET  /weather-requirements : get all the weatherRequirements.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of weatherRequirements in body
     */
    @GetMapping("/weather-requirements")
    @Timed
    public List<WeatherRequirements> getAllWeatherRequirements() {
        log.debug("REST request to get all WeatherRequirements");
        return weatherRequirementsService.findAll();
        }

    /**
     * GET  /weather-requirements/:id : get the "id" weatherRequirements.
     *
     * @param id the id of the weatherRequirements to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the weatherRequirements, or with status 404 (Not Found)
     */
    @GetMapping("/weather-requirements/{id}")
    @Timed
    public ResponseEntity<WeatherRequirements> getWeatherRequirements(@PathVariable Long id) {
        log.debug("REST request to get WeatherRequirements : {}", id);
        WeatherRequirements weatherRequirements = weatherRequirementsService.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(weatherRequirements));
    }

    /**
     * DELETE  /weather-requirements/:id : delete the "id" weatherRequirements.
     *
     * @param id the id of the weatherRequirements to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/weather-requirements/{id}")
    @Timed
    public ResponseEntity<Void> deleteWeatherRequirements(@PathVariable Long id) {
        log.debug("REST request to delete WeatherRequirements : {}", id);
        weatherRequirementsService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
