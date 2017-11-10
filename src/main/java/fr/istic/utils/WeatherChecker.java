package fr.istic.utils;

import fr.istic.domain.Weather;
import fr.istic.domain.WeatherRequirements;
import fr.istic.domain.enumeration.PrecipitationType;
import fr.istic.log.FileLog;

public class WeatherChecker {

    public static boolean checkWeatherWithRequirements(Weather weather, WeatherRequirements weatherRequirements){
        if(weatherRequirements.getTemperatureMin() != null && weather.getTemperature() < weatherRequirements.getTemperatureMin()){
            FileLog.log("Temperature too low");
            return false;
        }
        if(weatherRequirements.getTemperatureMax() != null && weather.getTemperature() > weatherRequirements.getTemperatureMax()){
            FileLog.log("Temperature too high");
            return false;
        }
        if(weatherRequirements.getWindSpeedMax() != null && weather.getWindSpeed() > weatherRequirements.getWindSpeedMax()){
            FileLog.log("Wind Speed too high");
            return false;
        }
        if(weatherRequirements.getWindSpeedMin() != null && weather.getWindSpeed() < weatherRequirements.getWindSpeedMin()){
            FileLog.log("Wind Speed too low");
            return false;
        }
        if(weatherRequirements.getPrecipitationTypeMax() != null){
            if(weather.getPrecipitation() != null){

                if(weather.getPrecipitation().getType() == PrecipitationType.SNOW && weatherRequirements.getPrecipitationTypeMax() == PrecipitationType.RAIN){
                    FileLog.log("Precipitation Type Max = RAIN but Current = SNOW");
                    return false;
                }
                if((weather.getPrecipitation().getType() == PrecipitationType.SNOW || weather.getPrecipitation().getType() == PrecipitationType.RAIN ) && weatherRequirements.getPrecipitationTypeMax() == PrecipitationType.NONE){
                    FileLog.log("Precipitation Type Max = NONE but Current = SOME");
                    return false;
                }
                if(weatherRequirements.getPrecipitationValueMax() != null
                    && weather.getPrecipitation().getValue() > weatherRequirements.getPrecipitationValueMax()){
                    FileLog.log("Precipitation value too high");
                    return false;
                }
            }
        }
        if(weatherRequirements.getPrecipitationTypeMin() != null){
            if(weather.getPrecipitation() == null){
                if(weatherRequirements.getPrecipitationTypeMin() != PrecipitationType.NONE){
                    FileLog.log("Precipitation Type Min = SOME but Current = NONE");
                    return false;
                }
            }else {

                if (weather.getPrecipitation().getType() == null && weatherRequirements.getPrecipitationTypeMin() == PrecipitationType.RAIN) {
                    FileLog.log("Precipitation Type Min = RAIN but Current = NONE");
                    return false;
                }
                if (weather.getPrecipitation().getType() != PrecipitationType.SNOW && weatherRequirements.getPrecipitationTypeMin() == PrecipitationType.SNOW) {
                    FileLog.log("Precipitation Type Min = SNOW but Current = OTHER");
                    return false;
                }
                if (weatherRequirements.getPrecipitationValueMin() != null && weather.getPrecipitation().getValue() < weatherRequirements.getPrecipitationValueMin()) {
                    FileLog.log("Precipitation value too low");
                    return false;
                }
            }
        }


        return true;
    }
}
