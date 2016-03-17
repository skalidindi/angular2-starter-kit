/// <reference path="../jspm_packages/npm/angular2@2.0.0-beta.9/typings/browser.d.ts"/>
import 'reflect-metadata';
import 'es6-shim';
import 'zone.js';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'sg-my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

export class AppComponent { }

bootstrap(AppComponent);
