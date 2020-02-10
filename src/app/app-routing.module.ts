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
      { path: 'home', component: SiteComponent },
      { path: 'items', component: SiteComponent },
      { path: 'items/:id', component: PostComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
