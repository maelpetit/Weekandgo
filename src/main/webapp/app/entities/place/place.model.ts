import { BaseEntity } from './../../shared';

export class Place implements BaseEntity {
    constructor(
        public id?: number,
        public nom?: string,
        public latitude?: number,
        public longitude?: number,
        public sportLists?: BaseEntity[],
    ) {
    }
}
