import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
