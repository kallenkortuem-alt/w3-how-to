import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenusModule } from './menus/menus.module';
import { ImagesModule } from './images/images.module';
import { ButtonsModule } from './buttons/buttons.module';
import { GridModule } from './grid/grid.module';
import { MoreModule } from './more/more.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenusModule,
    ImagesModule,
    ButtonsModule,
    GridModule,
    MoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
