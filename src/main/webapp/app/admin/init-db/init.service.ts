import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class InitService {

    private SERVER_API_URL = 'http://localhost:9060/';
    private resourceUrl = this.SERVER_API_URL + 'api/init-db';

    constructor(private http: Http) { }

    init(): void {
        this.http.get(this.resourceUrl).map((res: Response) => {
            const jsonResponse = res.json();
            console.log(jsonResponse);
        });
        console.log('yo');
    }
}
