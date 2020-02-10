import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit, OnDestroy {

    posts: Post[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.getPosts()
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
        console.log(id);
    }
}
