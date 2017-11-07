package fr.istic.utils;

import fr.istic.domain.Weather;
import fr.istic.domain.WeatherRequirements;
import fr.istic.domain.enumeration.PrecipitationType;

public class WeatherChecker {

    public static boolean checkWeatherWithRequirements(Weather weather, WeatherRequirements weatherRequirements){
        if(weatherRequirements.getTemperatureMin() != null && weather.getTemperature() < weatherRequirements.getTemperatureMin()){
            System.out.println("Temperature too low");
            return false;
        }
        if(weatherRequirements.getTemperatureMax() != null && weather.getTemperature() > weatherRequirements.getTemperatureMax()){
            System.out.println("Temperature too high");
            return false;
        }
        if(weatherRequirements.getWindSpeedMax() != null && weather.getWindSpeed() > weatherRequirements.getWindSpeedMax()){
            System.out.println("Wind Speed too high");
            return false;
        }
        if(weatherRequirements.getWindSpeedMin() != null && weather.getWindSpeed() < weatherRequirements.getWindSpeedMin()){
            System.out.println("Wind Speed too low");
            return false;
        }
        if(weatherRequirements.getPrecipitationTypeMax() != null){
            if(weather.getPrecipitation() != null){

                if(weather.getPrecipitation().getType() == PrecipitationType.SNOW && weatherRequirements.getPrecipitationTypeMax() == PrecipitationType.RAIN){
                    return false;
                }
                if((weather.getPrecipitation().getType() == PrecipitationType.SNOW || weather.getPrecipitation().getType() == PrecipitationType.RAIN ) && weatherRequirements.getPrecipitationTypeMax() == PrecipitationType.NONE){
                    return false;
                }
                if(weatherRequirements.getPrecipitationValueMax() != null && weather.getPrecipitation().getValue() > weatherRequirements.getPrecipitationValueMax()){
                    System.out.println("Precipitation value too high");
                    return false;
                }
            }
        }
        if(weatherRequirements.getPrecipitationTypeMin() != null){
            if(weather.getPrecipitation() == null){
                if(weatherRequirements.getPrecipitationTypeMin() != PrecipitationType.NONE){
                    // Not raining or snowing but we require some precipitation
                    return false;
                }
            }else {

                if (weather.getPrecipitation().getType() == null && weatherRequirements.getPrecipitationTypeMin() == PrecipitationType.RAIN) {
                    return false;
                }
                if (weather.getPrecipitation().getType() != PrecipitationType.SNOW && weatherRequirements.getPrecipitationTypeMax() == PrecipitationType.SNOW) {
                    return false;
                }
                if (weatherRequirements.getPrecipitationValueMin() != null && weather.getPrecipitation().getValue() < weatherRequirements.getPrecipitationValueMin()) {
                    System.out.println("Precipitation value too low");
                    return false;
                }
            }
        }


        return true;
    }
}
