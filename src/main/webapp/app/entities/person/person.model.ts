import { BaseEntity, User } from './../../shared';

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
        public currentPlace?: BaseEntity,
        public sportLists?: BaseEntity[],
    ) {
        this.profileCompleted = false;
    }
}
