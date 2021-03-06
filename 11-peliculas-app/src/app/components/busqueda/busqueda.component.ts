import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  buscar: string;

  constructor( public _ps: PeliculasService,
               public route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      if( params['texto'] ){
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {}

  buscarPelicula(){
    if (this.buscar.length===0) {
      return;
    }

    this._ps.buscarPelicula( this.buscar )
    .subscribe();
  }


}
