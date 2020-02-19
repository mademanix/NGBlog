import { Router, ActivatedRoute } from '@angular/router';
import { Component, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '[ rttd blog - ludwikmeister ]';

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    console.log(this.route.url);
    this.titleService.setTitle(this.title);
  }
}
