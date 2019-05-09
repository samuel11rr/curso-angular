import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private _ps:PeliculasService ) {
  }

  ngOnInit() {
  }

}
