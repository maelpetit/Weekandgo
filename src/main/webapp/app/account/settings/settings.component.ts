import { Component, OnInit } from '@angular/core';

import { Principal, AccountService } from '../../shared';
import {PersonService} from '../../entities/person/person.service';
import {Person} from '../../entities/person/person.model';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'jhi-settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
    error: string;
    success: string;
    settingsAccount: any;
    person: Person;
    birthDate: any;
    languages: any[];

    constructor(
        private account: AccountService,
        private personService: PersonService,
        private principal: Principal
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.settingsAccount = this.copyAccount(account);
            this.loadPerson();
        });
    }

    loadPerson(){
        this.personService.findByLogin(this.settingsAccount.login).subscribe((person) => {
            this.person = person;
            if(!isNullOrUndefined(this.person.birthDate)) {
                const date = new Date(Date.parse(this.person.birthDate)); //yyyy-MM-ddThh:mm
                this.birthDate = date.getFullYear() + '-' +
                    this.correctDateString(date.getMonth() + 1) + '-' +
                    this.correctDateString(date.getDate()) + 'T' +
                    this.correctDateString(date.getHours()) + ':' +
                    this.correctDateString(date.getMinutes());
            }
            console.log(this.person);
        });
    }

    correctDateString(date: number){
        return date < 10 ? '0' + date : date;
    }

    save() {
        this.account.save(this.settingsAccount).subscribe(() => {
            this.error = null;
            this.success = 'OK';
            this.principal.identity(true).then((account) => {
                this.settingsAccount = this.copyAccount(account);
            });

            this.person.firstName = this.settingsAccount.firstName;
            this.person.lastName = this.settingsAccount.lastName;
            this.person.email = this.settingsAccount.email;
            this.person.birthDate = this.birthDate;
            if(!this.person.profileCompleted) {
                if (!isNullOrUndefined(this.person.phoneNumber) && !isNullOrUndefined(this.person.birthDate)) {
                    this.person.profileCompleted = true;
                }
            }
            this.personService.update(this.person).subscribe((person) => {
                this.person = person;
                console.log(this.person);
            });

        }, () => {
            this.success = null;
            this.error = 'ERROR';
        });

    }
    copyAccount(account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }
}
