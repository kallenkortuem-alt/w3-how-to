import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveTopNavComponent } from './responsive-top-nav/responsive-top-nav.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResponsiveTopNavComponent,
    IconBarComponent,
    MenuIconComponent,
    AccordionComponent,
    TabsComponent
  ],
  exports: [
    ResponsiveTopNavComponent,
    IconBarComponent,
    MenuIconComponent,
    AccordionComponent,
    TabsComponent
  ]
})
export class MenusModule { }
