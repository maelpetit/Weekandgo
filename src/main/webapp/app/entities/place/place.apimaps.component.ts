import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Person} from '../person/person.model';
import {Principal} from '../../shared/auth/principal.service';
import {Router} from '@angular/router';
import {Place} from './place.model';
import {PlaceService} from './place.service';

@Component({
  selector: 'jhi-api-maps',
  templateUrl: './place.apimaps.component.html',
  styles: []
})
export class ApiMapsComponent implements OnInit, OnChanges {
    place: any;
    @Input() person: Person;
    @Input() placeIn: Place ;
    lat: number;
    lng: number;
    zoom: number;
    radius: number;
    modalRef: NgbModalRef;
  constructor(
      /*private editLocationService: EditLocationService,
      private editLocationModalService: EditLocationModalService,*/
      private MyPlaceService: PlaceService,
      private principal: Principal,
      private router: Router
  ) { }

  ngOnInit() {
      console.log('on est dans le ngoninit') ;
      this.lat  = this.place.latitude ;
      this.lng  = this.place.longitude;
  }
    ngOnChanges(changes: SimpleChanges) {
        if ( changes['person'] && (this.person != null) ) {
            // Update des informations de localisation
            this.MyPlaceService.find(this.person.id).subscribe((data) => {
                // Read the result field from the JSON response.
                console.log(data);
                this.place = data['results'];
            });
            if (this.person.id) {
                this.lat = this.place.latitude;
                this.lng = this.place.longitude;
            }
        }
    }

    /*editLocation() {
        this.modalRef = this.editLocationModalService.open();
    }*/

}
