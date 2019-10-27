import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = 'https://angular-portafolio-bc133.firebaseio.com';
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }


  private cargarProductos() {

    return new Promise( ( resolve, reject ) => {
      this.http.get( `${ this.url }/productos_idx.json` )
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });

  }


  getProducto( id: string ) {
    const url = 'https://angular-portafolio-bc133.firebaseio.com/productos';
    return this.http.get( `${ url }/${ id }.json` );
  }


  buscarProducto( termino: string ) {
    if ( this.productosFiltrado.length === 0 ) {
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      });
    }
    else{
      this.filtrarProductos( termino );
    }
  }


  private filtrarProductos( termino: string ) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }

    });

  }
}
