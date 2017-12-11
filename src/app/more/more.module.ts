import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContactCardComponent
    ],
    exports: [
        ContactCardComponent
    ]
})
export class MoreModule { }
