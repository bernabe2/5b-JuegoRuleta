import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero-ruleta',
  templateUrl: './tablero-ruleta.component.html',
  styleUrls: ['./tablero-ruleta.component.css']
})
export class TableroRuletaComponent {
  resultado: number | null = null;
  numeroApostado: number | null = null;
  apuestaRealizada: boolean = false;
  apuestaGanada: boolean = false;
  oportunidadesRestantes: number = 3;

  girarRuleta() {
    // Lógica para generar el resultado de la ruleta
    this.resultado = Math.floor(Math.random() * 37); // Genera un número aleatorio entre 0 y 36

    // Comprobar si la apuesta coincide con el resultado
    if (this.numeroApostado !== null && this.resultado === this.numeroApostado) {
      this.apuestaGanada = true;
    } else {
      this.apuestaGanada = false;
      this.oportunidadesRestantes--;
    }

    // Mostrar mensaje de resultado de la apuesta
    this.apuestaRealizada = true;
  }

  realizarApuesta() {
    // Reiniciar el juego
    this.resultado = null;
    this.apuestaRealizada = false;
    this.apuestaGanada = false;
    this.oportunidadesRestantes = 3;
  }
}
