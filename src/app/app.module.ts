import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SiteComponent } from './containers/site.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashscreenComponent } from './containers/splashscreen/splashscreen.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { PostComponent } from './containers/content/post.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      SiteComponent,
      SplashscreenComponent,
      ReadMorePipe,
      PostComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
