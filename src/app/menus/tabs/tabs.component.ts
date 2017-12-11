import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

    constructor() { }

    public view: string;

    public ngOnInit(): void {
        this.view = 'London';
    }

    public onSetView(view: string): void {
        this.view = view;
    }

    public onCloseTab(): void {
        this.view = null;
    }

}
