package fr.istic.factories;

import fr.istic.domain.WeatherRequirements;
import fr.istic.domain.enumeration.PrecipitationType;

public class WeatherRequirementsFactory {

    private static WeatherRequirementsFactory _INSTANCE;

    private WeatherRequirementsFactory(){
    }

    public static WeatherRequirementsFactory getFactory(){
        if(_INSTANCE == null){
            _INSTANCE = new WeatherRequirementsFactory();
        }
        return _INSTANCE;
    }

    public WeatherRequirements createFootballRequirements(){
        WeatherRequirements weatherRequirements = new WeatherRequirements();
        weatherRequirements.setTemperatureMin(5.);
        weatherRequirements.setTemperatureMax(40.);
        weatherRequirements.setWindSpeedMax(60.);
        weatherRequirements.setPrecipitationTypeMax(PrecipitationType.SNOW);
        return weatherRequirements;
    }

    public WeatherRequirements createBeachVolleyRequirements(){
        WeatherRequirements weatherRequirements = new WeatherRequirements();
        weatherRequirements.setTemperatureMin(15.);
        weatherRequirements.setTemperatureMax(40.);
        weatherRequirements.setPrecipitationTypeMax(PrecipitationType.RAIN);
        weatherRequirements.setWindSpeedMax(40.);
        return weatherRequirements;
    }
}
