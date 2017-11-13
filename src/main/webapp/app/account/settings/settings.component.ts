import { Component, OnInit } from '@angular/core';

import { Account, Principal, AccountService } from '../../shared';
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
    accountObj: Account;
    person: Person;
    isAdmin: boolean;

    constructor(
        private account: AccountService,
        private personService: PersonService,
        private principal: Principal
    ) {
    }
    ngOnInit() {

        this.principal.identity().then((accountObj) => {
            this.accountObj = accountObj;
            this.isAdmin = true;
            for (const role of this.accountObj.authorities) {
                if (role === 'ROLE_ADMIN') {
                    this.isAdmin = false;
                }
            }
            console.log(this.isAdmin);
            this.principal.identity().then((account) => {
                this.settingsAccount = this.copyAccount(account);
                console.log(this.settingsAccount);
                if (this.isAdmin) {
                    this.loadPerson();
                }
            });
        });

    }
    loadPerson() {
        this.personService.findByLogin(this.settingsAccount.login).subscribe((person) => {
            this.person = person;
            console.log(this.person);
        });
    }
    save() {
        this.account.save(this.settingsAccount).subscribe(() => {
            this.error = null;
            this.success = 'OK';
            this.principal.identity(true).then((account) => {
                this.settingsAccount = this.copyAccount(account);
            });

            if (this.isAdmin) {
                this.person.firstName = this.settingsAccount.firstName;
                this.person.lastName = this.settingsAccount.lastName;
                this.person.email = this.settingsAccount.email;
                if (!this.person.profileCompleted) {
                    if (!isNullOrUndefined(this.person.phoneNumber) && !isNullOrUndefined(this.person.birthDate)) {
                        this.person.profileCompleted = true;
                    }
                }
                this.personService.update(this.person).subscribe((person) => {
                    this.person = person;
                    console.log(this.person);
                });
            }

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
