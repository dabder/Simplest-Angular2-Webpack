/* polyfills */
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule }  from '@angular/platform-browser';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);