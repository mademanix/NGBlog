import { Appsetting, Api } from './const/appsetting.const';
import { PostComponent } from './containers/content/post.component';
import { SiteComponent } from './containers/site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // { path: 'home', component: SiteComponent },
      { path: Appsetting.API_POSTS, component: SiteComponent },
      { path: Appsetting.API_ONE_POST + ':id', component: SiteComponent },
      { path: Appsetting.API_ONE_POST + ':id', component: SiteComponent },
      { path: '**', redirectTo: Appsetting.API_POSTS }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
