import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContactCardComponent,
        CardComponent
    ],
    exports: [
        ContactCardComponent,
        CardComponent
    ]
})
export class MoreModule { }
