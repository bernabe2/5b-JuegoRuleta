import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroRuletaComponent } from './tablero-ruleta/tablero-ruleta.component';

const routes: Routes = [
  { path: '', redirectTo: '/ruleta', pathMatch: 'full' },
  { path: 'ruleta', component: TableroRuletaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
