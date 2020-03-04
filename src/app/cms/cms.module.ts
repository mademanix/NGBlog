import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContentComponent } from './containers/add-content/add-content.component';
import { EditContentComponent } from './containers/edit-content/edit-content.component';



@NgModule({
  declarations: [AddContentComponent, EditContentComponent],
  imports: [
    CommonModule
  ]
})
export class CmsModule { }
