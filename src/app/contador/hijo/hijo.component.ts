import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {
  @Input() contador:number;
  @Output() contadorCambio = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  multiplicar(){
    this.contador *=2;
    this.contadorCambio.emit(this.contador);
  }

  dividir(){
    this.contador /=2;
    this.contadorCambio.emit(this.contador);
  }
  resetNieto(event:any){
    this.contador = event;
    this.contadorCambio.emit(this.contador);
  }
}
