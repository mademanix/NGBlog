import { Appsetting } from './const/appsetting.const';
import { SiteComponent } from './containers/site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: Appsetting.API_POSTS, component: SiteComponent },
    { path: Appsetting.API_ONE_POST + ':id', component: SiteComponent },
    { path: '**', redirectTo: Appsetting.API_POSTS }
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
