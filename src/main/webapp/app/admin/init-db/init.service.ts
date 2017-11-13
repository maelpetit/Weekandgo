import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class EventService {

    private resourceUrl = SERVER_API_URL + 'api/init-db';

    constructor(private http: Http) { }

    init(): void {
        this.http.get(`${this.resourceUrl}`);
    }
}
