import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.less']
})
export class SlideshowComponent implements OnInit {

    constructor() { }

    public index: number;
    private totalLength: number;
    private timeSinceChange: number;
    private switchInterval: number;
    private checkInterval: number;

    public ngOnInit(): void {
        this.index = 0;
        this.totalLength = 3;
        this.timeSinceChange = 0;
        this.checkInterval = 1000;
        this.switchInterval = 6000;
        this.checkTime();
    }

    public onMove(value: number): void {
        const newIndex = this.index + value;
        if (newIndex < 0) {
            this.onGoTo(this.totalLength - 1);
        } else if (newIndex >= this.totalLength) {
            this.onGoTo(0);
        } else {
            this.onGoTo(newIndex);
        }
    }

    public onGoTo(value: number): void {
        this.timeSinceChange = 0;
        this.index = value;
    }

    private checkTime(): void {
        this.timeSinceChange += this.checkInterval;
        if (this.timeSinceChange >= this.switchInterval) {
            this.onMove(1);
        }

        setTimeout(() => this.checkTime(), this.checkInterval);
    }
}
