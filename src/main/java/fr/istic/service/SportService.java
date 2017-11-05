package fr.istic.service;

import fr.istic.domain.Sport;
import java.util.List;

/**
 * Service Interface for managing Sport.
 */
public interface SportService {

    /**
     * Save a sport.
     *
     * @param sport the entity to save
     * @return the persisted entity
     */
    Sport save(Sport sport);

    /**
     *  Get all the sports.
     *
     *  @return the list of entities
     */
    List<Sport> findAll();

    /**
     *  Get the "id" sport.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    Sport findOne(Long id);

    /**
     *  Delete the "id" sport.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
