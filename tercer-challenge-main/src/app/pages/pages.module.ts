import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './error/error.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { ChipModule } from 'primeng/chip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule} from 'primeng/table';
import { MultiSelectModule} from 'primeng/multiselect';
import { InputTextModule} from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ContextMenuModule} from 'primeng/contextmenu';
import {  DialogModule } from 'primeng/dialog';
import {  ButtonModule } from 'primeng/button';
import { CalendarModule} from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { FileUploadModule} from 'primeng/fileupload';
import { StepsModule } from 'primeng/steps';
import { CheckboxModule} from 'primeng/checkbox';
import { DataViewModule} from 'primeng/dataview';
import { DividerModule} from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KnobModule} from 'primeng/knob';
import { OverlayPanelModule} from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox'
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';





import { AutoCompleteModule } from "primeng/autocomplete";
import { ChipsModule } from "primeng/chips";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { InputTextareaModule } from "primeng/inputtextarea";


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    ErrorComponent,
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ChipsModule,
    CascadeSelectModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    MatDialogModule,
    PagesRoutingModule,
    ToastModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    ChipModule,
    RatingModule,
    SidebarModule,
    TabMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatCommonModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    DropdownModule,
    TableModule,
    MultiSelectModule,
    InputTextModule,
    InputMaskModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    FileUploadModule,
    StepsModule,
    CheckboxModule,
    DataViewModule,
    DividerModule,
    InputSwitchModule,
    InputNumberModule,
    KnobModule,
    OverlayPanelModule,
    ListboxModule,
    InputTextareaModule,
    SliderModule,
    ProgressBarModule,
    InputTextModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
