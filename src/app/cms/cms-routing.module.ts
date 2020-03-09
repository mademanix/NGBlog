import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddContentComponent } from './containers/cms-crud/cms-add-content/add-content.component';
import { EditContentComponent } from './containers/cms-crud/cms-edit-content/edit-content.component';
import { RemoveContentComponent } from './containers/cms-crud/cms-remove-content/remove-content.component';
import { ListContentComponent } from './containers/cms-list-content/list-content.component';

const routes: Routes = [
    {
        path: 'cms/add',
        component: AddContentComponent,
    },
    {
        path: 'cms/edit',
        component: EditContentComponent,
    },
    {
        path: 'cms/remove',
        component: RemoveContentComponent,
    },
    {
        path: 'cms/list',
        component: ListContentComponent,
    },
    {
        path: 'cms/**',
        redirectTo: 'list'
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
export class CmsRoutingModule {}
