import {Component, Output} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = '[ rttd blog - ludwikmeister ]';

    constructor(private titleService: Title) {

        this.titleService.setTitle(this.title);
    }
}
