package fr.istic.domain;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

import fr.istic.domain.enumeration.PrecipitationType;

/**
 * A WeatherRequirements.
 */
@Entity
@Table(name = "weather_requirements")
public class WeatherRequirements implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "temperature_min")
    private Double temperatureMin;

    @Column(name = "temperature_max")
    private Double temperatureMax;

    @Column(name = "wind_speed_min")
    private Double windSpeedMin;

    @Column(name = "wind_speed_max")
    private Double windSpeedMax;

    @Column(name = "wind_angle_min")
    private Double windAngleMin;

    @Column(name = "wind_angle_max")
    private Double windAngleMax;

    @Column(name = "wave_height_min")
    private Double waveHeightMin;

    @Column(name = "wave_height_max")
    private Double waveHeightMax;

    @Enumerated(EnumType.STRING)
    @Column(name = "precipitation_type_max")
    private PrecipitationType precipitationTypeMax;

    @Enumerated(EnumType.STRING)
    @Column(name = "precipitation_type_min")
    private PrecipitationType precipitationTypeMin;

    @Column(name = "precipitation_value_max")
    private Double precipitationValueMax;

    @Column(name = "precipitation_value_min")
    private Double precipitationValueMin;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTemperatureMin() {
        return temperatureMin;
    }

    public WeatherRequirements temperatureMin(Double temperatureMin) {
        this.temperatureMin = temperatureMin;
        return this;
    }

    public void setTemperatureMin(Double temperatureMin) {
        this.temperatureMin = temperatureMin;
    }

    public Double getTemperatureMax() {
        return temperatureMax;
    }

    public WeatherRequirements temperatureMax(Double temperatureMax) {
        this.temperatureMax = temperatureMax;
        return this;
    }

    public void setTemperatureMax(Double temperatureMax) {
        this.temperatureMax = temperatureMax;
    }

    public Double getWindSpeedMin() {
        return windSpeedMin;
    }

    public WeatherRequirements windSpeedMin(Double windSpeedMin) {
        this.windSpeedMin = windSpeedMin;
        return this;
    }

    public void setWindSpeedMin(Double windSpeedMin) {
        this.windSpeedMin = windSpeedMin;
    }

    public Double getWindSpeedMax() {
        return windSpeedMax;
    }

    public WeatherRequirements windSpeedMax(Double windSpeedMax) {
        this.windSpeedMax = windSpeedMax;
        return this;
    }

    public void setWindSpeedMax(Double windSpeedMax) {
        this.windSpeedMax = windSpeedMax;
    }

    public Double getWindAngleMin() {
        return windAngleMin;
    }

    public WeatherRequirements windAngleMin(Double windAngleMin) {
        this.windAngleMin = windAngleMin;
        return this;
    }

    public void setWindAngleMin(Double windAngleMin) {
        this.windAngleMin = windAngleMin;
    }

    public Double getWindAngleMax() {
        return windAngleMax;
    }

    public WeatherRequirements windAngleMax(Double windAngleMax) {
        this.windAngleMax = windAngleMax;
        return this;
    }

    public void setWindAngleMax(Double windAngleMax) {
        this.windAngleMax = windAngleMax;
    }

    public Double getWaveHeightMin() {
        return waveHeightMin;
    }

    public WeatherRequirements waveHeightMin(Double waveHeightMin) {
        this.waveHeightMin = waveHeightMin;
        return this;
    }

    public void setWaveHeightMin(Double waveHeightMin) {
        this.waveHeightMin = waveHeightMin;
    }

    public Double getWaveHeightMax() {
        return waveHeightMax;
    }

    public WeatherRequirements waveHeightMax(Double waveHeightMax) {
        this.waveHeightMax = waveHeightMax;
        return this;
    }

    public void setWaveHeightMax(Double waveHeightMax) {
        this.waveHeightMax = waveHeightMax;
    }

    public PrecipitationType getPrecipitationTypeMax() {
        return precipitationTypeMax;
    }

    public WeatherRequirements precipitationTypeMax(PrecipitationType precipitationTypeMax) {
        this.precipitationTypeMax = precipitationTypeMax;
        return this;
    }

    public void setPrecipitationTypeMax(PrecipitationType precipitationTypeMax) {
        this.precipitationTypeMax = precipitationTypeMax;
    }

    public PrecipitationType getPrecipitationTypeMin() {
        return precipitationTypeMin;
    }

    public WeatherRequirements precipitationTypeMin(PrecipitationType precipitationTypeMin) {
        this.precipitationTypeMin = precipitationTypeMin;
        return this;
    }

    public void setPrecipitationTypeMin(PrecipitationType precipitationTypeMin) {
        this.precipitationTypeMin = precipitationTypeMin;
    }

    public Double getPrecipitationValueMax() {
        return precipitationValueMax;
    }

    public WeatherRequirements precipitationValueMax(Double precipitationValueMax) {
        this.precipitationValueMax = precipitationValueMax;
        return this;
    }

    public void setPrecipitationValueMax(Double precipitationValueMax) {
        this.precipitationValueMax = precipitationValueMax;
    }

    public Double getPrecipitationValueMin() {
        return precipitationValueMin;
    }

    public WeatherRequirements precipitationValueMin(Double precipitationValueMin) {
        this.precipitationValueMin = precipitationValueMin;
        return this;
    }

    public void setPrecipitationValueMin(Double precipitationValueMin) {
        this.precipitationValueMin = precipitationValueMin;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        WeatherRequirements weatherRequirements = (WeatherRequirements) o;
        if (weatherRequirements.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), weatherRequirements.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "WeatherRequirements{" +
            "id=" + getId() +
            ", temperatureMin='" + getTemperatureMin() + "'" +
            ", temperatureMax='" + getTemperatureMax() + "'" +
            ", windSpeedMin='" + getWindSpeedMin() + "'" +
            ", windSpeedMax='" + getWindSpeedMax() + "'" +
            ", windAngleMin='" + getWindAngleMin() + "'" +
            ", windAngleMax='" + getWindAngleMax() + "'" +
            ", waveHeightMin='" + getWaveHeightMin() + "'" +
            ", waveHeightMax='" + getWaveHeightMax() + "'" +
            ", precipitationTypeMax='" + getPrecipitationTypeMax() + "'" +
            ", precipitationTypeMin='" + getPrecipitationTypeMin() + "'" +
            ", precipitationValueMax='" + getPrecipitationValueMax() + "'" +
            ", precipitationValueMin='" + getPrecipitationValueMin() + "'" +
            "}";
    }
}
