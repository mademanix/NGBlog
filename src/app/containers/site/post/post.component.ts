import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

    singlePost: Post;

    constructor() {
    }

    ngOnInit() {
    }

}
