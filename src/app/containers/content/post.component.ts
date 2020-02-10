import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

    @Input() content: Post[] = [];

    constructor() {
    }

    ngOnInit(): void {

        console.log(this.content);

    }

    foobar(id: string) {
        console.log(id);
    }

}
