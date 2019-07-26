import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera:any;

  constructor( public _ps:PeliculasService ) {
    this._ps.getCartelera()
    .subscribe( data => {
      this.cartelera=data;
      console.log(this.cartelera);

    })
  }

  ngOnInit() {
  }

}
