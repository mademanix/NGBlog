import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './containers/site.component';
import { PostComponent } from './containers/content/post.component';
import { AboutComponent } from './containers/content/about/about.component';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { SplashscreenComponent } from './containers/splashscreen/splashscreen.component';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

const CONTAINERS = [
    SiteComponent,
    PostComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    SplashscreenComponent,
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
        CommonModule
    ],
    exports: [

    ]
})
export class SiteModule {
}
