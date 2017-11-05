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
        Sport sport1 = SportFactory.getFactory().createSurf();
        Sport sport2 = SportFactory.getFactory().createKitesurf();

        save(sport1);
        save(sport2);
    }

    private void save(Sport sport){
        weatherRequirementsService.save(sport.getWeatherRequired());
        sportService.save(sport);
    }
}
