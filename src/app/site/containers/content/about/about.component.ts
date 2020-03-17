import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

    private windows = `lol did you really don't know what is Windows? xD`;

    constructor() {
    }

    ngOnInit() {
    }

    public lolWindowsReally() {
        return this.windows;
    }
}
