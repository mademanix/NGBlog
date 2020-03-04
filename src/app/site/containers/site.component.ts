import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../utils/interfaces/post';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit, OnDestroy {

    posts: Post[] = [];

    private url: string;
    constructor(
        private route: ActivatedRoute
        ) {
            this.url = this.route.snapshot.url[this.route.snapshot.url.length - 1].toString() || 'posts';
        }

    ngOnInit(): void {

        this.posts = this.route.snapshot.data.posts.response;
    }

    ngOnDestroy(): void {

        this.posts.length = 0;
    }
}
