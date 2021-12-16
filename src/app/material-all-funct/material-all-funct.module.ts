import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule  } from '@angular/material/button';
import {  MatButtonToggleModule  } from '@angular/material/button-toggle';
import {  MatIconModule  } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { AutocompletComponent } from './autocomplet/autocomplet.component';
import { SomeBasiConceptsComponent } from './some-basi-concepts/some-basi-concepts.component';
import { FormsModule } from '@angular/forms';
import { MatgridComponent } from './matgrid/matgrid.component';
import { MatTapComponent } from './mat-tap/mat-tap.component';
import { MatStepperComponent } from './mat-stepper/mat-stepper.component';
import { MatFormsComponent } from './mat-forms/mat-forms.component';
import { DialogExmapleComponent } from './dialog-exmaple/dialog-exmaple.component';
import { OpenDialogContainerComponent } from './open-dialog-container/open-dialog-container.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    MatSliderComponent,
    AutocompletComponent,
    SomeBasiConceptsComponent,
    MatgridComponent,
    MatTapComponent,
    MatStepperComponent,
    MatFormsComponent,
    DialogExmapleComponent,
    OpenDialogContainerComponent,
    DataGridComponent,
    ListComponent,
    NavbarComponent
  ],
  exports:[
    MatSliderComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    AppRoutingModule
    
    
  ]
})
export class MaterialAllFunctModule { }
