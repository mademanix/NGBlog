import { Appsetting, Api } from './const/appsetting.const';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SiteComponent } from './page/site.component';
import { HttpClientModule } from '@angular/common/http';
import { SplashscreenComponent } from './page/splashscreen/splashscreen.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { PostComponent } from './page/content/post.component';
import { AboutComponent } from './page/content/about/about.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { EditContentComponent } from './cms/edit-content/edit-content.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      SiteComponent,
      SplashscreenComponent,
      ReadMorePipe,
      PostComponent,
      AboutComponent,
      DateFormatPipe,
      EditContentComponent
  ],
  imports: [
      BrowserModule,
      // Api,
      // Appsetting,
      AppRoutingModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
