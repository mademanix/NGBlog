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
      { path: 'posts', component: SiteComponent },
      { path: 'post/:id', component: SiteComponent },
      { path: '**', redirectTo: 'post' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
