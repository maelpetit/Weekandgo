import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import {Account, LoginModalService, Principal } from '../shared';
import {Person} from '../entities/person/person.model';
import {PersonService} from '../entities/person/person.service';
import {Sport} from '../entities/sport/sport.model';
import {PlaceService} from '../entities/place/place.service';
import {SportService} from '../entities/sport/sport.service';
import {Place} from '../entities/place/place.model';
import {ResponseWrapper} from '../shared/model/response-wrapper.model';
import {isNullOrUndefined} from 'util';
import {EventService} from '../entities/event/event.service';
import {InitService} from '../admin/init-db/init.service';

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
    failEvent: boolean;
    event: any;
    isAdmin: boolean;
    hasCurrentPlace: boolean;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private personService: PersonService,
        private sportService: SportService,
        private placeService: PlaceService,
        private eventService: EventService,
        private initService: InitService
    ) {
        this.sports = [];
        this._eventReceived = false;
        this.failEvent = false;
        this.hasCurrentPlace = false;
    }
    ngOnInit() {
        this.loadAccount();
        this.registerAuthenticationSuccess();
    }
    loadAccount() {
        this.principal.identity().then((account) => {
            this.account = account;
            if (!isNullOrUndefined(this.account)) {
                this.loadPerson();
            }
        });
    }
    loadPerson() {
        this.isAdmin = false;
        for (const role of this.account.authorities) {
            if (role === 'ROLE_ADMIN') {
                this.isAdmin = true;
            }
        }
        this.personService.findByLogin(this.account.login).subscribe((person) => {
            this.person = person;
            if (isNullOrUndefined(this.person.currentPlace)) {
                this.hasCurrentPlace = false;
            }else {
                this.hasCurrentPlace = true;
            }
            this.loadSportsAndPlaces();
        });
    }
    loadSportsAndPlaces() {
        this.sports = [];
        this.sportService.query().subscribe((res: ResponseWrapper) => {
            for (const sport of res.json) {
                const mySport = new MySport();
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
                if (!isNullOrUndefined(this.account)) {
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
    update(doEvent: boolean) {
        this.personService.update(this.person).subscribe((person) => {
            this.person = person;
            if (doEvent) {
                this.eventService.find(this.person.id).subscribe((event) => {
                        this.event = event;
                        this._eventReceived = true;
                        this.failEvent = false;
                        this.event.distance = Math.round(this.event.distance) ;
                        console.log(this.event);
                    },
                    () => {
                        this.failEvent = true;
                    });
            }
        });
    }
    go() {
        this.saveSports();
        this.setCurrentPlace();
        this.update(true);
    }
    saveAndUpdateSports() {
        this.saveSports();
        this.update(false);
    }
    saveSports() {
        for (const mySport of this.sports) {
            if (mySport.checked) {
                if (!this.person.containsSport(mySport.sport.id)) {
                    this.person.sportLists.push(mySport.sport);
                }
            } else {
                if (this.person.containsSport(mySport.sport.id)) {
                    this.person.removeSport(mySport.sport.id);
                }
            }
        }
        console.log(this.sports);
        console.log(this.person.sportLists);
    }
    handleChange(mySport, i) {
        this.sports[i].checked = !mySport.checked;
    }
    searchName() {
        this.placeSearch = new Array<Place>() ;
        for (const item of this.places) {
            if (this.searchText !== '' && item.nom.toLowerCase().includes(this.searchText.toLowerCase())) {
                this.placeSearch.push(item) ;
            }
        }
    }
    setAndUpdatePlace() {
        this.setCurrentPlace();
        this.update(false);
    }
    setCurrentPlace() {
        if (!isNullOrUndefined(this.placeSearch) && this.placeSearch.length > 0) {
            this.person.currentPlace = this.placeSearch[0];
            this.hasCurrentPlace = true;
        }
    }
    eventReceived() {
        return this._eventReceived;
    }
    previous() {
        this._eventReceived = false ;
    }

    initDataBase() {
        this.initService.init();
    }
}

class MySport {
    sport: Sport;
    checked: boolean;
}
