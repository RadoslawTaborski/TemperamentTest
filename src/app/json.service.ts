import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JsonService{

    constructor(private http: Http) {
         var obj;
    }

    public getJSON(jsonPath:string): Observable<any> {
         return this.http.get(jsonPath)
                         .map((res:any) => res.json());
     }
}