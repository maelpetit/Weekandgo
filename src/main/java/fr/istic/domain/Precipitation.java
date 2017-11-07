package fr.istic.domain;

import fr.istic.domain.enumeration.PrecipitationType;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Precipitation.
 */
public class Precipitation implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private PrecipitationType type;

    private Double value;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PrecipitationType getType() {
        return type;
    }

    public Precipitation type(PrecipitationType type) {
        this.type = type;
        return this;
    }

    public void setType(PrecipitationType type) {
        this.type = type;
    }

    public Double getValue() {
        return value;
    }

    public Precipitation value(Double value) {
        this.value = value;
        return this;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Precipitation precipitation = (Precipitation) o;
        if (precipitation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), precipitation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Precipitation{" +
            "id=" + getId() +
            ", type='" + getType() + "'" +
            ", value='" + getValue() + "'" +
            "}";
    }
}
