import { Sport } from './../sport';
import { Place } from './../place';
import { Weather } from './../weather';

export class Event {
    constructor(
        public date?: any,
        public place?: Place,
        public sport?: Sport,
        public weather?: Weather,
        public distance?: number
    ) {
    }
}
