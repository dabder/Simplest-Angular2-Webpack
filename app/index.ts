/* polyfills */
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './component/app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);