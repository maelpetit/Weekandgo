package fr.istic.web.rest;

import fr.istic.WeekandgoApp;

import fr.istic.domain.WeatherRequirements;
import fr.istic.repository.WeatherRequirementsRepository;
import fr.istic.service.WeatherRequirementsService;
import fr.istic.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the WeatherRequirementsResource REST controller.
 *
 * @see WeatherRequirementsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = WeekandgoApp.class)
public class WeatherRequirementsResourceIntTest {

    private static final Double DEFAULT_TEMPERATURE_MIN = 1D;
    private static final Double UPDATED_TEMPERATURE_MIN = 2D;

    private static final Double DEFAULT_TEMPERATURE_MAX = 1D;
    private static final Double UPDATED_TEMPERATURE_MAX = 2D;

    private static final Double DEFAULT_WIND_SPEED_MIN = 1D;
    private static final Double UPDATED_WIND_SPEED_MIN = 2D;

    private static final Double DEFAULT_WIND_SPEED_MAX = 1D;
    private static final Double UPDATED_WIND_SPEED_MAX = 2D;

    private static final Double DEFAULT_WIND_ANGLE_MIN = 1D;
    private static final Double UPDATED_WIND_ANGLE_MIN = 2D;

    private static final Double DEFAULT_WIND_ANGLE_MAX = 1D;
    private static final Double UPDATED_WIND_ANGLE_MAX = 2D;

    private static final Double DEFAULT_WAVE_HEIGHT_MIN = 1D;
    private static final Double UPDATED_WAVE_HEIGHT_MIN = 2D;

    private static final Double DEFAULT_WAVE_HEIGHT_MAX = 1D;
    private static final Double UPDATED_WAVE_HEIGHT_MAX = 2D;

    @Autowired
    private WeatherRequirementsRepository weatherRequirementsRepository;

    @Autowired
    private WeatherRequirementsService weatherRequirementsService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restWeatherRequirementsMockMvc;

    private WeatherRequirements weatherRequirements;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final WeatherRequirementsResource weatherRequirementsResource = new WeatherRequirementsResource(weatherRequirementsService);
        this.restWeatherRequirementsMockMvc = MockMvcBuilders.standaloneSetup(weatherRequirementsResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static WeatherRequirements createEntity(EntityManager em) {
        WeatherRequirements weatherRequirements = new WeatherRequirements()
            .temperatureMin(DEFAULT_TEMPERATURE_MIN)
            .temperatureMax(DEFAULT_TEMPERATURE_MAX)
            .windSpeedMin(DEFAULT_WIND_SPEED_MIN)
            .windSpeedMax(DEFAULT_WIND_SPEED_MAX)
            .windAngleMin(DEFAULT_WIND_ANGLE_MIN)
            .windAngleMax(DEFAULT_WIND_ANGLE_MAX)
            .waveHeightMin(DEFAULT_WAVE_HEIGHT_MIN)
            .waveHeightMax(DEFAULT_WAVE_HEIGHT_MAX);
        return weatherRequirements;
    }

    @Before
    public void initTest() {
        weatherRequirements = createEntity(em);
    }

    @Test
    @Transactional
    public void createWeatherRequirements() throws Exception {
        int databaseSizeBeforeCreate = weatherRequirementsRepository.findAll().size();

        // Create the WeatherRequirements
        restWeatherRequirementsMockMvc.perform(post("/api/weather-requirements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(weatherRequirements)))
            .andExpect(status().isCreated());

        // Validate the WeatherRequirements in the database
        List<WeatherRequirements> weatherRequirementsList = weatherRequirementsRepository.findAll();
        assertThat(weatherRequirementsList).hasSize(databaseSizeBeforeCreate + 1);
        WeatherRequirements testWeatherRequirements = weatherRequirementsList.get(weatherRequirementsList.size() - 1);
        assertThat(testWeatherRequirements.getTemperatureMin()).isEqualTo(DEFAULT_TEMPERATURE_MIN);
        assertThat(testWeatherRequirements.getTemperatureMax()).isEqualTo(DEFAULT_TEMPERATURE_MAX);
        assertThat(testWeatherRequirements.getWindSpeedMin()).isEqualTo(DEFAULT_WIND_SPEED_MIN);
        assertThat(testWeatherRequirements.getWindSpeedMax()).isEqualTo(DEFAULT_WIND_SPEED_MAX);
        assertThat(testWeatherRequirements.getWindAngleMin()).isEqualTo(DEFAULT_WIND_ANGLE_MIN);
        assertThat(testWeatherRequirements.getWindAngleMax()).isEqualTo(DEFAULT_WIND_ANGLE_MAX);
        assertThat(testWeatherRequirements.getWaveHeightMin()).isEqualTo(DEFAULT_WAVE_HEIGHT_MIN);
        assertThat(testWeatherRequirements.getWaveHeightMax()).isEqualTo(DEFAULT_WAVE_HEIGHT_MAX);
    }

    @Test
    @Transactional
    public void createWeatherRequirementsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = weatherRequirementsRepository.findAll().size();

        // Create the WeatherRequirements with an existing ID
        weatherRequirements.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restWeatherRequirementsMockMvc.perform(post("/api/weather-requirements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(weatherRequirements)))
            .andExpect(status().isBadRequest());

        // Validate the WeatherRequirements in the database
        List<WeatherRequirements> weatherRequirementsList = weatherRequirementsRepository.findAll();
        assertThat(weatherRequirementsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllWeatherRequirements() throws Exception {
        // Initialize the database
        weatherRequirementsRepository.saveAndFlush(weatherRequirements);

        // Get all the weatherRequirementsList
        restWeatherRequirementsMockMvc.perform(get("/api/weather-requirements?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(weatherRequirements.getId().intValue())))
            .andExpect(jsonPath("$.[*].temperatureMin").value(hasItem(DEFAULT_TEMPERATURE_MIN.doubleValue())))
            .andExpect(jsonPath("$.[*].temperatureMax").value(hasItem(DEFAULT_TEMPERATURE_MAX.doubleValue())))
            .andExpect(jsonPath("$.[*].windSpeedMin").value(hasItem(DEFAULT_WIND_SPEED_MIN.doubleValue())))
            .andExpect(jsonPath("$.[*].windSpeedMax").value(hasItem(DEFAULT_WIND_SPEED_MAX.doubleValue())))
            .andExpect(jsonPath("$.[*].windAngleMin").value(hasItem(DEFAULT_WIND_ANGLE_MIN.doubleValue())))
            .andExpect(jsonPath("$.[*].windAngleMax").value(hasItem(DEFAULT_WIND_ANGLE_MAX.doubleValue())))
            .andExpect(jsonPath("$.[*].waveHeightMin").value(hasItem(DEFAULT_WAVE_HEIGHT_MIN.doubleValue())))
            .andExpect(jsonPath("$.[*].waveHeightMax").value(hasItem(DEFAULT_WAVE_HEIGHT_MAX.doubleValue())));
    }

    @Test
    @Transactional
    public void getWeatherRequirements() throws Exception {
        // Initialize the database
        weatherRequirementsRepository.saveAndFlush(weatherRequirements);

        // Get the weatherRequirements
        restWeatherRequirementsMockMvc.perform(get("/api/weather-requirements/{id}", weatherRequirements.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(weatherRequirements.getId().intValue()))
            .andExpect(jsonPath("$.temperatureMin").value(DEFAULT_TEMPERATURE_MIN.doubleValue()))
            .andExpect(jsonPath("$.temperatureMax").value(DEFAULT_TEMPERATURE_MAX.doubleValue()))
            .andExpect(jsonPath("$.windSpeedMin").value(DEFAULT_WIND_SPEED_MIN.doubleValue()))
            .andExpect(jsonPath("$.windSpeedMax").value(DEFAULT_WIND_SPEED_MAX.doubleValue()))
            .andExpect(jsonPath("$.windAngleMin").value(DEFAULT_WIND_ANGLE_MIN.doubleValue()))
            .andExpect(jsonPath("$.windAngleMax").value(DEFAULT_WIND_ANGLE_MAX.doubleValue()))
            .andExpect(jsonPath("$.waveHeightMin").value(DEFAULT_WAVE_HEIGHT_MIN.doubleValue()))
            .andExpect(jsonPath("$.waveHeightMax").value(DEFAULT_WAVE_HEIGHT_MAX.doubleValue()));
    }

    @Test
    @Transactional
    public void getNonExistingWeatherRequirements() throws Exception {
        // Get the weatherRequirements
        restWeatherRequirementsMockMvc.perform(get("/api/weather-requirements/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateWeatherRequirements() throws Exception {
        // Initialize the database
        weatherRequirementsService.save(weatherRequirements);

        int databaseSizeBeforeUpdate = weatherRequirementsRepository.findAll().size();

        // Update the weatherRequirements
        WeatherRequirements updatedWeatherRequirements = weatherRequirementsRepository.findOne(weatherRequirements.getId());
        updatedWeatherRequirements
            .temperatureMin(UPDATED_TEMPERATURE_MIN)
            .temperatureMax(UPDATED_TEMPERATURE_MAX)
            .windSpeedMin(UPDATED_WIND_SPEED_MIN)
            .windSpeedMax(UPDATED_WIND_SPEED_MAX)
            .windAngleMin(UPDATED_WIND_ANGLE_MIN)
            .windAngleMax(UPDATED_WIND_ANGLE_MAX)
            .waveHeightMin(UPDATED_WAVE_HEIGHT_MIN)
            .waveHeightMax(UPDATED_WAVE_HEIGHT_MAX);

        restWeatherRequirementsMockMvc.perform(put("/api/weather-requirements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedWeatherRequirements)))
            .andExpect(status().isOk());

        // Validate the WeatherRequirements in the database
        List<WeatherRequirements> weatherRequirementsList = weatherRequirementsRepository.findAll();
        assertThat(weatherRequirementsList).hasSize(databaseSizeBeforeUpdate);
        WeatherRequirements testWeatherRequirements = weatherRequirementsList.get(weatherRequirementsList.size() - 1);
        assertThat(testWeatherRequirements.getTemperatureMin()).isEqualTo(UPDATED_TEMPERATURE_MIN);
        assertThat(testWeatherRequirements.getTemperatureMax()).isEqualTo(UPDATED_TEMPERATURE_MAX);
        assertThat(testWeatherRequirements.getWindSpeedMin()).isEqualTo(UPDATED_WIND_SPEED_MIN);
        assertThat(testWeatherRequirements.getWindSpeedMax()).isEqualTo(UPDATED_WIND_SPEED_MAX);
        assertThat(testWeatherRequirements.getWindAngleMin()).isEqualTo(UPDATED_WIND_ANGLE_MIN);
        assertThat(testWeatherRequirements.getWindAngleMax()).isEqualTo(UPDATED_WIND_ANGLE_MAX);
        assertThat(testWeatherRequirements.getWaveHeightMin()).isEqualTo(UPDATED_WAVE_HEIGHT_MIN);
        assertThat(testWeatherRequirements.getWaveHeightMax()).isEqualTo(UPDATED_WAVE_HEIGHT_MAX);
    }

    @Test
    @Transactional
    public void updateNonExistingWeatherRequirements() throws Exception {
        int databaseSizeBeforeUpdate = weatherRequirementsRepository.findAll().size();

        // Create the WeatherRequirements

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restWeatherRequirementsMockMvc.perform(put("/api/weather-requirements")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(weatherRequirements)))
            .andExpect(status().isCreated());

        // Validate the WeatherRequirements in the database
        List<WeatherRequirements> weatherRequirementsList = weatherRequirementsRepository.findAll();
        assertThat(weatherRequirementsList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteWeatherRequirements() throws Exception {
        // Initialize the database
        weatherRequirementsService.save(weatherRequirements);

        int databaseSizeBeforeDelete = weatherRequirementsRepository.findAll().size();

        // Get the weatherRequirements
        restWeatherRequirementsMockMvc.perform(delete("/api/weather-requirements/{id}", weatherRequirements.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<WeatherRequirements> weatherRequirementsList = weatherRequirementsRepository.findAll();
        assertThat(weatherRequirementsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(WeatherRequirements.class);
        WeatherRequirements weatherRequirements1 = new WeatherRequirements();
        weatherRequirements1.setId(1L);
        WeatherRequirements weatherRequirements2 = new WeatherRequirements();
        weatherRequirements2.setId(weatherRequirements1.getId());
        assertThat(weatherRequirements1).isEqualTo(weatherRequirements2);
        weatherRequirements2.setId(2L);
        assertThat(weatherRequirements1).isNotEqualTo(weatherRequirements2);
        weatherRequirements1.setId(null);
        assertThat(weatherRequirements1).isNotEqualTo(weatherRequirements2);
    }
}
