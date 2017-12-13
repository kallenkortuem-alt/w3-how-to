import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardComponent } from './components/card/card.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { FixedSidebarComponent } from './components/fixed-sidebar/fixed-sidebar.component';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { MenuIconComponent } from './components/menu-icon/menu-icon.component';
import { ResponsiveTopNavComponent } from './components/responsive-top-nav/responsive-top-nav.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
    declarations: [
        AccordionComponent,
        CardComponent,
        ContactCardComponent,
        FixedSidebarComponent,
        IconBarComponent,
        MenuIconComponent,
        ResponsiveTopNavComponent,
        SlideshowComponent,
        SocialMediaButtonsComponent,
        TabsComponent
    ],
    exports: [
        AccordionComponent,
        CardComponent,
        ContactCardComponent,
        FixedSidebarComponent,
        IconBarComponent,
        MenuIconComponent,
        ResponsiveTopNavComponent,
        SlideshowComponent,
        SocialMediaButtonsComponent,
        TabsComponent
    ],
    imports: [
      CommonModule
    ],
    providers: []
})
export class SharedModule { }
