import { PostResolverService } from '../site/services/resolvers/post-resolver.service';
import { Appsetting } from '../utils/const/appsetting.const';
import { SiteComponent } from '../site/containers/site.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../site/containers/content/about/about.component';

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
        resolve: {
            posts:
            PostResolverService
        }
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        redirectTo: 'about'
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
export class AppRoutingModule {
}
