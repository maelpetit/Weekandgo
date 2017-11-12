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
import {ResponseWrapper} from '../shared/model/response-wrapper.model';
import {isNullOrUndefined} from 'util';
import {EventService} from '../entities/event/event.service';

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
    _eventReceived: boolean;
    event: any;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private personService: PersonService,
        private sportService: SportService,
        private placeService: PlaceService,
        private eventService: EventService
    ) {
        this.sports = [];
        this._eventReceived = false;
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
        this.sports = [];
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

    update(doEvent: boolean){
        this.personService.update(this.person).subscribe((person)=>{
            this.person = person;
            if(doEvent){
                this.eventService.find(this.person.id).subscribe((event)=>{
                    this.event = event;
                    this._eventReceived = true;
                    this.event.distance = Math.round(this.event.distance) ;
                    console.log(this.event);
                });
            }
        });
    }

    go(){
        // CHECK IF SPORTS AND CURRENT PLACE NEED TO BE CHANGED
        this.saveSports();
        this.setCurrentPlace();
        this.update(true);
    }

    saveAndUpdateSports(){
        this.saveSports();
        this.update(false);
    }

    saveSports(){
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
        console.log(this.sports);
        console.log(this.person.sportLists);
    }

    handleChange(mySport, i){
        this.sports[i].checked = !mySport.checked;
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

    setAndUpdatePlace(){
        this.setCurrentPlace();
        this.update(false);
    }

    setCurrentPlace(){
        if(!isNullOrUndefined(this.placeSearch) && this.placeSearch.length > 0) {
            this.person.currentPlace = this.placeSearch[0];
        }
    }

    eventReceived(){
        return this._eventReceived;
    }

    previous(){
        this._eventReceived = false;
    }
}

class MySport{
    sport: Sport;
    checked: boolean;
}
