import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../services';

@Component({
    selector: 'app-sticky-header',
    templateUrl: './sticky-header.component.html',
    styleUrls: ['./sticky-header.component.less']
})
export class StickyHeaderComponent implements OnInit {

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window
    ) { }

    public isStuck: boolean;
    public height: number;

    public ngOnInit(): void {
        const header = this.document.getElementById('header');
        if (header) {
            this.height = header.offsetTop;
        }
    }

    @HostListener('window:scroll')
    public onScroll(): void {
        this.isStuck = window.pageYOffset >= this.height;
    }
}
