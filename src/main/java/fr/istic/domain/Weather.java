package fr.istic.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Weather.
 */
public class Weather implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private ZonedDateTime date;

    private Double temperature;

    private Double windSpeed;

    private Double windAngle;

    private Double waveHeight;

    private Double clouds;

    private Double pressure;

    private Double humidity;

    private Precipitation precipitation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public Weather date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public Double getTemperature() {
        return temperature;
    }

    public Weather temperature(Double temperature) {
        this.temperature = temperature;
        return this;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getWindSpeed() {
        return windSpeed;
    }

    public Weather windSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
        return this;
    }

    public void setWindSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
    }

    public Double getWindAngle() {
        return windAngle;
    }

    public Weather windAngle(Double windAngle) {
        this.windAngle = windAngle;
        return this;
    }

    public void setWindAngle(Double windAngle) {
        this.windAngle = windAngle;
    }

    public Double getWaveHeight() {
        return waveHeight;
    }

    public Weather waveHeight(Double waveHeight) {
        this.waveHeight = waveHeight;
        return this;
    }

    public void setWaveHeight(Double waveHeight) {
        this.waveHeight = waveHeight;
    }

    public Double getClouds() {
        return clouds;
    }

    public Weather clouds(Double clouds) {
        this.clouds = clouds;
        return this;
    }

    public void setClouds(Double clouds) {
        this.clouds = clouds;
    }

    public Double getPressure() {
        return pressure;
    }

    public Weather pressure(Double pressure) {
        this.pressure = pressure;
        return this;
    }

    public void setPressure(Double pressure) {
        this.pressure = pressure;
    }

    public Double getHumidity() {
        return humidity;
    }

    public Weather humidity(Double humidity) {
        this.humidity = humidity;
        return this;
    }

    public void setHumidity(Double humidity) {
        this.humidity = humidity;
    }

    public Precipitation getPrecipitation() {
        return precipitation;
    }

    public Weather precipitation(Precipitation precipitation) {
        this.precipitation = precipitation;
        return this;
    }

    public void setPrecipitation(Precipitation precipitation) {
        this.precipitation = precipitation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Weather weather = (Weather) o;
        if (weather.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), weather.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Weather{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", temperature='" + getTemperature() + "'" +
            ", windSpeed='" + getWindSpeed() + "'" +
            ", windAngle='" + getWindAngle() + "'" +
            ", waveHeight='" + getWaveHeight() + "'" +
            ", clouds='" + getClouds() + "'" +
            ", pressure='" + getPressure() + "'" +
            ", humidity='" + getHumidity() + "'" +
            ", precipitation='" + (getPrecipitation() != null?getPrecipitation().toString():"null") + "'" +
            "}";
    }
}
