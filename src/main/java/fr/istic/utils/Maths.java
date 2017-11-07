package fr.istic.utils;

import fr.istic.domain.Place;

public class Maths {

    public static Double distance(Place from, Place to){
        return distance(from.getLatitude(), from.getLongitude(), to.getLatitude(), to.getLongitude());
    }

    public static Double distance(Double latFrom, Double longFrom, Double latTo, Double longTo){
        int R = 6371; // Radius of the earth in km
        double dLat = deg2rad(latTo-latFrom);  // deg2rad below
        double dLon = deg2rad(longTo-longFrom);
        double a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(latFrom)) * Math.cos(deg2rad(latTo)) *
                    Math.sin(dLon/2) * Math.sin(dLon/2)
            ;
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        double d = R * c; // Distance in km
        return d;
    }

    public static double deg2rad(double deg) {
        return deg * (Math.PI/180);
    }

}
