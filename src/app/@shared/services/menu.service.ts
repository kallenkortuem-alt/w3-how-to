import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuGroup } from '../entities/menu-group';

@Injectable()
export class MenuService {

    constructor(
        private http: HttpClient
    ) { }

    public getMenu(): Observable<Array<MenuGroup>> {
        const url = '../../../data/navigation.json';
        return this.http.jsonp<Array<MenuGroup>>(url, 'result');
    }
}
