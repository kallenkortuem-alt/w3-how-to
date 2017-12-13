import { Component, OnInit, Input } from '@angular/core';
import { MenuGroup } from '../../entities';
import { MenuItem } from '../../entities';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-fixed-sidebar',
    templateUrl: './fixed-sidebar.component.html',
    styleUrls: ['./fixed-sidebar.component.less']
})
export class FixedSidebarComponent implements OnInit {

    constructor(
        private menuService: MenuService
    ) { }

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
