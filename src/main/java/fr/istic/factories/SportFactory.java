package fr.istic.factories;

import fr.istic.domain.Sport;

public class SportFactory {

    private static SportFactory _INSTANCE;

    private SportFactory(){
    }

    public static SportFactory getFactory(){
        if(_INSTANCE == null){
            _INSTANCE = new SportFactory();
        }
        return _INSTANCE;
    }

    public Sport createFootball(){
        Sport football = new Sport();
        football.setTitle("Football");
        football.setWeatherRequired(WeatherRequirementsFactory.getFactory().createFootballRequirements());
        return football;
    }

    public Sport createBeachVolley(){
        Sport beachVolley = new Sport();
        beachVolley.setTitle("Beach Volley");
        beachVolley.setWeatherRequired(WeatherRequirementsFactory.getFactory().createBeachVolleyRequirements());
        return beachVolley;
    }

    public Sport createSurf(){
        Sport surf = new Sport();
        surf.setTitle("Surf");
        surf.setWeatherRequired(WeatherRequirementsFactory.getFactory().createSurfRequirements());
        return surf;
    }

    public Sport createKitesurf(){
        Sport kitesurf = new Sport();
        kitesurf.setTitle("Kite Surf");
        kitesurf.setWeatherRequired(WeatherRequirementsFactory.getFactory().createKitesurfRequirements());
        return kitesurf;
    }
}
