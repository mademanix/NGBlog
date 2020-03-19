import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Post } from '../../../../utils/interfaces/post';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

    @Input() content: Post[] = [];

    public mobileView;
    private tabletWidthValue = 1200;

    constructor(private titleService: Title) {

        this.titleService.setTitle('[ rttd blog - ludwikmeister ]');
    }

    ngOnInit(): void {
        this.mobileView = window.screen.width < this.tabletWidthValue;
    }

    @HostListener('window:resize', [])
    onResize() {
        this.mobileView = window.screen.width < this.tabletWidthValue;
    }
}
