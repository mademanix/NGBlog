import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(
        private titleService: Title,
        private route: ActivatedRoute
    ) {
        this.titleService.setTitle(`[ rttd ${this.setTitle()} - ludwikmeister ]`);
    }

    private setTitle(): string {

        if (this.route.url.toString().includes('about')) {
            return 'about';
        } else if (this.route.url.toString().includes('post')) {
            return 'blog';
        } else {
            return 'yeet';
        }
    }
}
