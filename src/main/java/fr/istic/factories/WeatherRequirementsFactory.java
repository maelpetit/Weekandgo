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
        return createWeatherRequirements(5., 40., null, PrecipitationType.SNOW, null, 60.);
    }

    public WeatherRequirements createBeachVolleyRequirements(){
        return createWeatherRequirements(15., 40., null, PrecipitationType.RAIN, null, 40.);
    }

    public WeatherRequirements createSurfRequirements(){
        return createWeatherRequirements(15., 40., null, PrecipitationType.RAIN, null, null);
    }

    public WeatherRequirements createKitesurfRequirements(){
        return createWeatherRequirements(15., 40., null, PrecipitationType.RAIN, 10., null);
    }

    public WeatherRequirements createWeatherRequirements(Double tempMin, Double tempMax, PrecipitationType precipitationTypeMin, PrecipitationType precipitationTypeMax, Double windSpeedMin, Double windSpeedMax){
        WeatherRequirements weatherRequirements = new WeatherRequirements();
        weatherRequirements.setTemperatureMin(tempMin);
        weatherRequirements.setTemperatureMax(tempMax);
        weatherRequirements.setPrecipitationTypeMin(precipitationTypeMin);
        weatherRequirements.setPrecipitationTypeMax(precipitationTypeMax);
        weatherRequirements.setWindSpeedMin(windSpeedMin);
        weatherRequirements.setWindSpeedMax(windSpeedMax);
        return weatherRequirements;
    }
}
