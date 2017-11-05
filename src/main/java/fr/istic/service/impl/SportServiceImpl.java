package fr.istic.service.impl;

import fr.istic.service.SportService;
import fr.istic.domain.Sport;
import fr.istic.repository.SportRepository;
import fr.istic.tests.SportTest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Sport.
 */
@Service
@Transactional
public class SportServiceImpl implements SportService{

    private final Logger log = LoggerFactory.getLogger(SportServiceImpl.class);

    private final SportRepository sportRepository;

    @Autowired
    private SportTest sportTest;

    public SportServiceImpl(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    /**
     * Save a sport.
     *
     * @param sport the entity to save
     * @return the persisted entity
     */
    @Override
    public Sport save(Sport sport) {
        log.debug("Request to save Sport : {}", sport);
        return sportRepository.save(sport);
    }

    /**
     *  Get all the sports.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Sport> findAll() {
        log.debug("Request to get all Sports");
        return sportRepository.findAllWithEagerRelationships();
    }

    /**
     *  Get one sport by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Sport findOne(Long id) {
        log.debug("Request to get Sport : {}", id);
        return sportRepository.findOneWithEagerRelationships(id);
    }

    /**
     *  Delete the  sport by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Sport : {}", id);
        sportRepository.delete(id);
    }
}
