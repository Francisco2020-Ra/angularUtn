import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  exports:[
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class MaterialModule { }
