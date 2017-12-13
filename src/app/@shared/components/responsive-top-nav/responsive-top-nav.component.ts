import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-responsive-top-nav',
    templateUrl: './responsive-top-nav.component.html',
    styleUrls: ['./responsive-top-nav.component.less']
})
export class ResponsiveTopNavComponent implements OnInit {

    constructor() {
    }

    @Input() public responsive = true;
    public open: boolean;

    public ngOnInit(): void {
    }

    public onToggleOpen(): void {
        this.open = !this.open;
    }
}
