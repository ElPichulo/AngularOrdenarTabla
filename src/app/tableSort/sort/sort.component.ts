import { Component} from '@angular/core';
import * as _ from 'lodash';



//instalar esta libreria npm install --save-dev lodash 
//--> Si arroja error o no deja usar/importar la libreria hay que instalar lo siguiente
//npm install @types/lodash --save-dev

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
  private _order: boolean = true;

  client : Client[] = [
    { id: 1, nombre: 'Grégor', apellido: 'Gozález',edad: 15},
    { id: 2, nombre: 'Maria', apellido: 'Sulbaran',edad: 28},
    { id: 3, nombre: 'Juan', apellido: 'Cedeño',edad: 4},
    { id: 4, nombre: 'Carlos', apellido: 'Perez',edad: 13}
  ]

  get _clientes(){
    //console.log("estado en _clientes: " + this._order);
    if (this._order === true)
        return _.orderBy(this.client, this.tipoOrden, ['desc']);
    else
        return _.orderBy(this.client, this.tipoOrden, ['asc']);
  }

  orden(_tipoOrden: string) {
    //console.log(tipoOrden);
    //
    if (this.tipoOrden === _tipoOrden && this._order===true){
        this._order = false;
        this.tipoOrden = _tipoOrden;
    }
    else{
      this.tipoOrden = _tipoOrden;
      this._order = true;
    }
    
  }
}
