import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-media-buttons',
    templateUrl: './social-media-buttons.component.html',
    styleUrls: ['./social-media-buttons.component.less']
})
export class SocialMediaButtonsComponent implements OnInit {

    constructor() { }

    public icons: Array<string>;

    public ngOnInit(): void {
        this.icons = [
            'fa-facebook',
            'fa-twitter',
            'fa-google',
            'fa-linkedin',
            'fa-youtube',
            'fa-instagram',
            'fa-pinterest',
            'fa-snapchat-ghost',
            'fa-skype',
            'fa-android',
            'fa-dribbble',
            'fa-vimeo',
            'fa-tumblr',
            'fa-vine',
            'fa-foursquare',
            'fa-stumbleupon',
            'fa-flickr',
            'fa-yahoo',
            'fa-reddit',
            'fa-rss'
        ];
    }

}
