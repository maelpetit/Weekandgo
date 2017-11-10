import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Event } from './event.model';
import { ResponseWrapper } from '../../shared';

@Injectable()
export class EventService {

    private resourceUrl = SERVER_API_URL + 'api/event';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    find(id: number): Observable<Event> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Person.
     */
    private convertItemFromServer(json: any): Event {
        const entity: Event = Object.assign(new Event(), json);
        entity.date = this.dateUtils
            .convertDateTimeFromServer(json.date);
        return entity;
    }

    /**
     * Convert a Person to a JSON which can be sent to the server.
     */
    private convert(event: Event): Event {
        const copy: Event = Object.assign({}, event);

        copy.date = this.dateUtils.toDate(event.date);
        return copy;
    }
}
