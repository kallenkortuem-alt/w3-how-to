import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SocialMediaButtonsComponent
    ],
    exports: [
        SocialMediaButtonsComponent
    ]
})
export class ButtonsModule { }
