import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Post } from '../../../utils/interfaces/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

    @Input() content: Post[] = [];

    public mobileView;
    private tabletWidthValue = 1200;
    constructor() {
    }

    ngOnInit(): void {
        this.mobileView = window.screen.width < this.tabletWidthValue;
    }

    @HostListener('window:resize', [])
    onResize() {
        this.mobileView = window.screen.width < this.tabletWidthValue;
    }
}
