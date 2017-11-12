import { BaseEntity, User } from './../../shared';
import {Place} from '../place/place.model';
import {Sport} from '../sport/sport.model';

export class Person implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public birthDate?: any,
        public distanceMax?: number,
        public profileCompleted?: boolean,
        public user?: User,
        public currentPlace?: Place,
        public sportLists?: Sport[],
    ) {
        this.profileCompleted = false;
    }
    containsSport(sportId: number){
        for(const sport of this.sportLists){
            if(sport.id === sportId){
                return true;
            }
        }
        return false;
    }
    removeSport(sportId: number){
        var sports = new Array<Sport>();
        for(const sport of this.sportLists){
            if(sport.id !== sportId){
                sports.push(sport);
            }
        }
        this.sportLists = sports;
    }
}
