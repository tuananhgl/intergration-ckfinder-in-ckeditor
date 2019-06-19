import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AllMediaService {

    constructor(private http: HttpClient) { }

    getListImages(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
