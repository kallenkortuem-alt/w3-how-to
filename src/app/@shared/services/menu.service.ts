import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { MenuGroup } from '../entities/menu-group';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

    constructor(
        private http: Http
    ) { }

    public getMenu(): Observable<Array<MenuGroup>> {
        const url = 'assets/navigation.json';
        return this.http.request(url).map((value: Response, index: number) => {
            return value.json();
        });
    }
}
