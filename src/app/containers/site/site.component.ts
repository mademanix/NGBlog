import { Component, OnInit } from '@angular/core';
import {Post} from '../../interfaces/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit {

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

    foobar(id: string) {
        console.log(id);
    }
}
