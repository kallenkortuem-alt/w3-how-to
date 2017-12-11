import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-icon-bar',
    templateUrl: './icon-bar.component.html',
    styleUrls: ['./icon-bar.component.less']
})
export class IconBarComponent implements OnInit {

    constructor() { }

    @Input() public horizontal = true;

    public ngOnInit(): void {
    }

}
