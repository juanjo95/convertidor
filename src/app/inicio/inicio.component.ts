import { Component, OnInit } from '@angular/core';
import { Monedas } from '../interfaces/monedas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cantidad:number = 1;
  tengo:string = 'USD';
  quiero:string = 'EUR';

  total:number = 0;

  monedas: Array<Monedas> =[
    {name: 'USD', desc: 'Us Dolar'},
    {name: 'EUR', desc: 'Euro'},
    {name: 'LIBRA', desc: 'Libra'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.convertir();
  }

  convertir():void{

    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.87;
        }else if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.74;
        }
        break;
      case 'EUR':
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }else if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.16;
        }else if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }else if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.35;
        }else if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.17;
        }
        break;
    }

  }

}
