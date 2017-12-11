import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-icon',
    templateUrl: './menu-icon.component.html',
    styleUrls: ['./menu-icon.component.less']
})
export class MenuIconComponent implements OnInit {

    constructor() { }

    public close: boolean;

    public ngOnInit(): void {
    }

    public onToggleClose(): void {
        this.close = !this.close;
    }

}
