import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WINDOW_PROVIDERS } from './services';
import { MenuService } from './services';

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
import { StickyHeaderComponent } from './components/sticky-header/sticky-header.component';
import { LayoutComponent } from './components/layout/layout.component';

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
        TabsComponent,
        StickyHeaderComponent,
        LayoutComponent
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
        TabsComponent,
        StickyHeaderComponent,
        LayoutComponent
    ],
    imports: [
      CommonModule
    ],
    providers: [
        MenuService,
        WINDOW_PROVIDERS
    ]
})
export class SharedModule { }
