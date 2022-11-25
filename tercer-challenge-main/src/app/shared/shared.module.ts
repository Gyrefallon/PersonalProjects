import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PreviewComponent } from './preview/preview.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    PreviewComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
    PreviewComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
