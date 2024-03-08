// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableroRuletaModule } from './tablero-ruleta/tablero-ruleta.module'; // Importa el módulo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableroRuletaModule // Importa el módulo en lugar de declarar el componente directamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
