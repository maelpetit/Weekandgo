package fr.istic.repository;

import fr.istic.domain.WeatherRequirements;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the WeatherRequirements entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WeatherRequirementsRepository extends JpaRepository<WeatherRequirements, Long> {

}
