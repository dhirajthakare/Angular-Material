import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompletComponent } from './material-all-funct/autocomplet/autocomplet.component';
import { DataGridComponent } from './material-all-funct/data-grid/data-grid.component';
import { DialogExmapleComponent } from './material-all-funct/dialog-exmaple/dialog-exmaple.component';
import { ListComponent } from './material-all-funct/list/list.component';
import { MatFormsComponent } from './material-all-funct/mat-forms/mat-forms.component';
import { MatSliderComponent } from './material-all-funct/mat-slider/mat-slider.component';
import { MatStepperComponent } from './material-all-funct/mat-stepper/mat-stepper.component';
import { MatTapComponent } from './material-all-funct/mat-tap/mat-tap.component';
import { MaterialAllFunctComponent } from './material-all-funct/material-all-funct.component';
import { MatgridComponent } from './material-all-funct/matgrid/matgrid.component';
import { SomeBasiConceptsComponent } from './material-all-funct/some-basi-concepts/some-basi-concepts.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  
  {
    path:'',component:MaterialAllFunctComponent , children:[
    {path:'',component:ListComponent},
    {path:'mat-slider',component:MatSliderComponent},
    {path:'autocomplet',component:AutocompletComponent},
    {path:'basicmat',component:SomeBasiConceptsComponent},
    {path:'grid',component:MatgridComponent},
    {path:'mattab',component:MatTapComponent},
    {path:'matstepper',component:MatStepperComponent},
    {path:'matforms',component:MatFormsComponent},
    {path:'matdia',component:DialogExmapleComponent},
    {path:'datagrid',component:DataGridComponent}



  ] 
},
{path:'testing',component:TestingComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
