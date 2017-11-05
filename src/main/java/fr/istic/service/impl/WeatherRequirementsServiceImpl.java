package fr.istic.service.impl;

import fr.istic.service.WeatherRequirementsService;
import fr.istic.domain.WeatherRequirements;
import fr.istic.repository.WeatherRequirementsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing WeatherRequirements.
 */
@Service
@Transactional
public class WeatherRequirementsServiceImpl implements WeatherRequirementsService{

    private final Logger log = LoggerFactory.getLogger(WeatherRequirementsServiceImpl.class);

    private final WeatherRequirementsRepository weatherRequirementsRepository;

    public WeatherRequirementsServiceImpl(WeatherRequirementsRepository weatherRequirementsRepository) {
        this.weatherRequirementsRepository = weatherRequirementsRepository;
    }

    /**
     * Save a weatherRequirements.
     *
     * @param weatherRequirements the entity to save
     * @return the persisted entity
     */
    @Override
    public WeatherRequirements save(WeatherRequirements weatherRequirements) {
        log.debug("Request to save WeatherRequirements : {}", weatherRequirements);
        return weatherRequirementsRepository.save(weatherRequirements);
    }

    /**
     *  Get all the weatherRequirements.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<WeatherRequirements> findAll() {
        log.debug("Request to get all WeatherRequirements");
        return weatherRequirementsRepository.findAll();
    }

    /**
     *  Get one weatherRequirements by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public WeatherRequirements findOne(Long id) {
        log.debug("Request to get WeatherRequirements : {}", id);
        return weatherRequirementsRepository.findOne(id);
    }

    /**
     *  Delete the  weatherRequirements by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete WeatherRequirements : {}", id);
        weatherRequirementsRepository.delete(id);
    }
}
