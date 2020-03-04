import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SiteModule } from '../site/site.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        SiteModule,
        NgbModule
    ],
    exports: [
        SiteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
