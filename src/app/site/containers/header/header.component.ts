import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

    isNavbarCollapsed = true;
    @ViewChild('navbarContainer', {static: false}) navbar: ElementRef;

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {

    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (window.scrollY > window.innerHeight - this.navbar.nativeElement.scrollHeight) {
            this.renderer.setStyle(this.navbar.nativeElement, 'backgroundColor', 'rgba(195, 0, 47, 255)');
        } else  {
            this.renderer.setStyle(this.navbar.nativeElement, 'backgroundColor', 'rgba(0, 0, 0, 0)');
        }
    }

}
