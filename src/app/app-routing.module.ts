import { PostResolverService } from './services/resolvers/post-resolver.service';
import { Appsetting, Api } from './const/appsetting.const';
import { PostComponent } from './containers/content/post.component';
import { SiteComponent } from './containers/site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'posts',
    component: SiteComponent,
    resolve: {
      posts: PostResolverService
    }
  },
  {
    path: Appsetting.ONE_POST + ':id',
    component: SiteComponent,
    resolve: { posts: PostResolverService }
  },
  {
    path: '**',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      ...routes
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
