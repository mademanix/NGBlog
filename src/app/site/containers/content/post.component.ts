import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../utils/interfaces/post';

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
    }
}
