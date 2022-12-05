import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexyTableComponent } from './sexyTable/sexy-table.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    SexyTableComponent
  ],
  exports: [
    SexyTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class FeaturesModule { }
