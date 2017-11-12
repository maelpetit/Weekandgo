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
import {isNull, isNullOrUndefined} from "util";

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
    placeSearch: Place[];
    searchText: string;
    dist: number ;
    distmax: number;

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
        this.loadAccount();
        this.registerAuthenticationSuccess();
    }

    loadAccount(){
        this.principal.identity().then((account) => {
            this.account = account;
            if(!isNullOrUndefined(this.account)){
                this.loadPerson();
            }
        });
    }

    loadPerson(){
        this.personService.findByLogin(this.account.login).subscribe((person) => {
            this.person = person;
            console.log(this.person);
            this.loadSportsAndPlaces();
        });
    }

    loadSportsAndPlaces(){
        this.sportService.query().subscribe((res: ResponseWrapper) => {
            for(const sport of res.json){
                let mySport = new MySport();
                mySport.sport = sport;
                mySport.checked = this.person.containsSport(mySport.sport.id);
                this.sports.push(mySport);
            }
            console.log(this.sports);
        });

        this.placeService.query().subscribe((res: ResponseWrapper) => {
            this.places = res.json;
        });
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                if(!isNullOrUndefined(this.account)){
                    this.loadPerson();
                }
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
        for(const mySport of this.sports){
            if(mySport.checked){
                if(!this.person.containsSport(mySport.sport.id)){
                    this.person.sportLists.push(mySport.sport);
                }
            }else{
                if(this.person.containsSport(mySport.sport.id)){
                    this.person.removeSport(mySport.sport.id);
                }
            }
        }
        console.log(this.searchText);
    }

    searchName(){
        this.placeSearch = new Array<Place>() ;
        for (var item of this.places) {
            if(item.nom.toLowerCase().includes(this.searchText.toLowerCase())){
                this.placeSearch.push(item) ;
            }
        }
        console.log(this.placeSearch) ;
    }
    setCurrentPlace(){
        this.person.currentPlace = this.placeSearch[0] ;
        console.log(this.person.distanceMax) ;
    }
}

class MySport{
    sport: Sport;
    checked: boolean;
}
