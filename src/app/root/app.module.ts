import { FooterComponent } from '../site/containers/footer/footer.component';
import { HeaderComponent } from '../site/containers/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteModule } from '../site/site.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        SiteModule,
        NgbModule,
        ScrollToModule.forRoot()
    ],
    exports: [
        SiteModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
