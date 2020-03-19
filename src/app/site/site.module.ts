import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './containers/site.component';
import { PostComponent } from './containers/content/post/post.component';
import { AboutComponent } from './containers/content/about/about.component';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from '../root/app-routing.module';

const CONTAINERS = [
    SiteComponent,
    PostComponent,
    AboutComponent
];

const PIPES = [
    ReadMorePipe,
    DateFormatPipe
];

@NgModule({
    declarations: [
        ...CONTAINERS,
        ...PIPES
    ],
    imports: [
        CommonModule,
        ScrollToModule,
        AppRoutingModule
    ],
    exports: [

    ]
})
export class SiteModule {
}
