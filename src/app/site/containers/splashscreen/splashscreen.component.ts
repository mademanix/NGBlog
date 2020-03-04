import {Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.sass']
})
export class SplashscreenComponent implements OnInit {

    @ViewChild('canvas', {static: true})

    title = 'return to the dev';
    image = 'assets/img/logo_blog.png';

    constructor() {
    }

    ngOnInit() {

    }
}
