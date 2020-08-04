import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrintMasPipe} from '../print-mas.pipe'


@NgModule({
  declarations: [PrintMasPipe],
  imports: [
    CommonModule
  ],
  exports: [ PrintMasPipe]

})
export class ExportPipeModule { }
