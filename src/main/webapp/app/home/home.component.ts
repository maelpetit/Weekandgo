import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';
import {Person} from '../entities/person/person.model';
import {PersonService} from '../entities/person/person.service';
import {Sport} from '../entities/sport/sport.model';
import {PlaceService} from '../entities/place/place.service';
import {SportService} from '../entities/sport/sport.service';
import {Place} from '../entities/place/place.model';
import {ResponseWrapper} from "../shared/model/response-wrapper.model";

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    person: Person;
    sports: MySport[];
    places: Place[];

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private personService: PersonService,
        private sportService: SportService,
        private placeService: PlaceService
    ) {
        this.sports = [];
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
            this.personService.findByLogin(this.account.login).subscribe((person) => {
               this.person = person;
               console.log(this.person);
               this.loadSportsAndPlaces();
            });

        });
        this.registerAuthenticationSuccess();

    }

    loadSportsAndPlaces(){
        this.sportService.query().subscribe((res: ResponseWrapper) => {
            for(var sport of res.json){
                var mySport = new MySport();
                mySport.sport = sport;
                mySport.checked = this.person.containsSport(mySport.sport.id);
                this.sports.push(mySport);
            }
        });

        this.placeService.query().subscribe((res: ResponseWrapper) => {
            this.places = res.json;
        });
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    go(){

    }
}

class MySport{
    sport: Sport;
    checked: boolean;
}
