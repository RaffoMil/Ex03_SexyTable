import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexyTableComponent } from './sexyTable/sexy-table.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SexyTableComponent
  ],
  exports: [
    SexyTableComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        FormsModule
    ]
})
export class FeaturesModule { }
