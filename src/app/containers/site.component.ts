import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit, OnDestroy {

    posts: Post[] = [];

    private url: string;
    constructor(
        private postService: PostService,
        private route: ActivatedRoute
        ) {
            this.url = this.route.snapshot.url[this.route.snapshot.url.length - 1].toString() || 'posts';
        }

    ngOnInit() {

        this.postService.getPosts(this.url)
            .subscribe((data) => {
                for (const post of data) {
                    this.posts.push(post);
                }
            });
    }

    ngOnDestroy(): void {

        this.posts.length = 0;
    }

    foobar(id: string) {
    }
}
