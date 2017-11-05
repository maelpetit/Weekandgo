package fr.istic.service;

import fr.istic.domain.Place;
import java.util.List;

/**
 * Service Interface for managing Place.
 */
public interface PlaceService {

    /**
     * Save a place.
     *
     * @param place the entity to save
     * @return the persisted entity
     */
    Place save(Place place);

    /**
     *  Get all the places.
     *
     *  @return the list of entities
     */
    List<Place> findAll();

    /**
     *  Get the "id" place.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    Place findOne(Long id);

    /**
     *  Delete the "id" place.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
