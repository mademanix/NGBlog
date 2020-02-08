import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

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
