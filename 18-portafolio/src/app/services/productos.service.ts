import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = 'https://angular-portafolio-bc133.firebaseio.com';
  cargando = true;
  productos: Producto[];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {
    this.http.get( `${ this.url }/productos_idx.json` )
    .subscribe( (resp: Producto[]) => {
      this.productos = resp;
      this.cargando = false;
    });
  }
}
