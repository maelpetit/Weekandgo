package fr.istic.tests;

import fr.istic.domain.Sport;
import fr.istic.factories.SportFactory;
import fr.istic.service.SportService;
import fr.istic.service.WeatherRequirementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

@Service
@Configurable
public class SportTest {

    @Autowired
    private SportService sportService;
    @Autowired
    private WeatherRequirementsService weatherRequirementsService;

    public void sportCreationsTest(){
        System.out.println("Starting sportCreationTest...");
        Sport foot = SportFactory.getFactory().createFootball();
        weatherRequirementsService.save(foot.getWeatherRequired());
        sportService.save(foot);

        Sport beachVolley = SportFactory.getFactory().createBeachVolley();
        weatherRequirementsService.save(beachVolley.getWeatherRequired());
        sportService.save(beachVolley);
    }
}
