// tablero-ruleta.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableroRuletaComponent } from './tablero-ruleta.component';

@NgModule({
  declarations: [
    TableroRuletaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableroRuletaComponent
  ]
})
export class TableroRuletaModule { }
