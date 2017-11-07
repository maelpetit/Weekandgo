package fr.istic.service;

import fr.istic.domain.WeatherRequirements;
import java.util.List;

/**
 * Service Interface for managing WeatherRequirements.
 */
public interface WeatherRequirementsService {

    /**
     * Save a weatherRequirements.
     *
     * @param weatherRequirements the entity to save
     * @return the persisted entity
     */
    WeatherRequirements save(WeatherRequirements weatherRequirements);

    /**
     *  Get all the weatherRequirements.
     *
     *  @return the list of entities
     */
    List<WeatherRequirements> findAll();

    /**
     *  Get the "id" weatherRequirements.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    WeatherRequirements findOne(Long id);

    /**
     *  Delete the "id" weatherRequirements.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
