import { Component, OnInit, Input } from '@angular/core';
import { MenuGroup } from '../menu-entities/menu-group';
import { MenuItem } from '../menu-entities/menu-item';

@Component({
    selector: 'app-fixed-sidebar',
    templateUrl: './fixed-sidebar.component.html',
    styleUrls: ['./fixed-sidebar.component.less']
})
export class FixedSidebarComponent implements OnInit {

    constructor() { }

    @Input() public menuGroups: Array<MenuGroup>;

    public ngOnInit(): void {
        if (!this.menuGroups) {
            this.setDefaultGroups();
        }
    }

    private setDefaultGroups(): void {
        this.menuGroups = [
            <MenuGroup>{
                name: 'Menus',
                items: [
                    <MenuItem>{
                        label: 'Icon Bar',
                        url: ''
                    },
                    <MenuItem>{
                        label: 'Menu Icon',
                        url: ''
                    },
                    <MenuItem>{
                        label: 'Accordion',
                        url: ''
                    },
                    <MenuItem>{
                        label: 'Tabs',
                        url: ''
                    },
                ]
            }
        ];
    }
}
