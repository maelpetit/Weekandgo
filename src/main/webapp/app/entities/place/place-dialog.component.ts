import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Place } from './place.model';
import { PlacePopupService } from './place-popup.service';
import { PlaceService } from './place.service';
import { Sport, SportService } from '../sport';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-place-dialog',
    templateUrl: './place-dialog.component.html'
})
export class PlaceDialogComponent implements OnInit {

    place: Place;
    isSaving: boolean;

    sports: Sport[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private placeService: PlaceService,
        private sportService: SportService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.sportService.query()
            .subscribe((res: ResponseWrapper) => { this.sports = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.place.id !== undefined) {
            this.subscribeToSaveResponse(
                this.placeService.update(this.place));
        } else {
            this.subscribeToSaveResponse(
                this.placeService.create(this.place));
        }
    }

    private subscribeToSaveResponse(result: Observable<Place>) {
        result.subscribe((res: Place) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Place) {
        this.eventManager.broadcast({ name: 'placeListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackSportById(index: number, item: Sport) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-place-popup',
    template: ''
})
export class PlacePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private placePopupService: PlacePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.placePopupService
                    .open(PlaceDialogComponent as Component, params['id']);
            } else {
                this.placePopupService
                    .open(PlaceDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
