import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatTableModule, MatSortModule, MatProgressSpinnerModule ],
  declarations: [ AppComponent, HelloComponent, ScrollContainerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
