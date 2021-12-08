import { Component} from '@angular/core';
import * as _ from 'lodash';



//instalar esta libreria npm install --save-dev lodash

export interface Client {
  id: number,
  nombre: string,
  apellido: string,
  edad: number
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {

  private tipoOrden: string = "nombre";

  client : Client[] = [
    { id: 1, nombre: 'Grégor', apellido: 'Gozález',edad: 15},
    { id: 2, nombre: 'Maria', apellido: 'Sulbaran',edad: 28},
    { id: 3, nombre: 'Juan', apellido: 'Cedeño',edad: 4},
    { id: 4, nombre: 'Carlos', apellido: 'Perez',edad: 13}
  ]

  get _clientes(){

    return _.sortBy(this.client, this.tipoOrden);
  }

  orden(tipoOrden: string) {
    //console.log(tipoOrden);
    
    this.tipoOrden = tipoOrden;
  }
}
