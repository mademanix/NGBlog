import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteModule } from '../site/site.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';
import { CmsModule } from '../cms/cms.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        SiteModule,
        CmsModule,
        NgbModule,
        ScrollToModule.forRoot()
    ],
    exports: [
        SiteModule,
        CmsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
