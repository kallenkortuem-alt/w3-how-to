import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

    constructor() { }

    @Input() public title: string;

    public ngOnInit(): void {
    }

}
