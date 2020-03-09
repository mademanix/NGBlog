import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContentComponent } from './containers/cms-crud/cms-add-content/add-content.component';
import { EditContentComponent } from './containers/cms-crud/cms-edit-content/edit-content.component';
import { CmsComponent } from './containers/cms.component';
import { RemoveContentComponent } from './containers/cms-crud/cms-remove-content/remove-content.component';
import { ListContentComponent } from './containers/cms-list-content/list-content.component';
import { SidebarMenuComponent } from './containers/cms-sidebar-menu/sidebar-menu.component';
import { HeaderMenuComponent } from './containers/cms-header-menu/header-menu.component';
import { FooterComponent } from './containers/cms-footer/footer.component';
import { CmsRoutingModule } from './cms-routing.module';

const CONTAINERS = [
    AddContentComponent,
    EditContentComponent,
    CmsComponent,
    RemoveContentComponent,
    ListContentComponent,
    SidebarMenuComponent,
    HeaderMenuComponent,
    FooterComponent
];

@NgModule({
    declarations: [...CONTAINERS],
    imports: [
        CommonModule,
        CmsRoutingModule
    ]
})
export class CmsModule {
}
