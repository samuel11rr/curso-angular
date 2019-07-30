import { Component, OnInit } from '@angular/core';
import { Marcador } from '../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor( public _snackBar: MatSnackBar,
               public dialog: MatDialog) {
    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores') );
    }
  }

  ngOnInit() {  }

  agregarMarcador( evento ) {
    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );
    this.guardarStorage();

    this._snackBar.open('Marcador creado', 'OK', {
      duration: 2000
    });
  }

  borrarMarcador( index ) {
    this.marcadores.splice( index, 1 );
    this.guardarStorage();

    this._snackBar.open('Marcador eliminado', 'OK', {
      duration: 2000
    });
  }

  editarMarcador( marcador: Marcador ){
    const dialogRef = this.dialog.open( MapaEditarComponent , {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if( !result ) return;

      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;

      this.guardarStorage();

      this._snackBar.open('Marcador actualizado', 'OK', {
        duration: 2000
      });
    });
  }

  guardarStorage() {
    localStorage.setItem( 'marcadores' , JSON.stringify( this.marcadores ) );
  }

}
