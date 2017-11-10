import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Person } from './person.model';
import { PersonService } from './person.service';
import {EventService} from '../event/event.service';
import {Event} from '../event/event.model';

@Component({
    selector: 'jhi-person-detail',
    templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit, OnDestroy {

    person: Person;
    event: Event;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private personService: PersonService,
        private route: ActivatedRoute,
        private eventService: EventService
    ) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInPeople();
    }

    load(id) {
        this.personService.find(id).subscribe((person) => {
            this.person = person;
        });
        this.eventService.find(id).subscribe((event) => {
            this.event = event;
            console.log(this.event);
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInPeople() {
        this.eventSubscriber = this.eventManager.subscribe(
            'personListModification',
            (response) => this.load(this.person.id)
        );
    }
}
