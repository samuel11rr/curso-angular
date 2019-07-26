import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroesService: HeroesService,
               private route: ActivatedRoute ) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.heroesService.getHeroe( id )
      .subscribe( (resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  guardar( form: NgForm ) {

    if (!form.valid) {
      return console.log('Invalido');
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if ( this.heroe.id ) {
      peticion = this.heroesService.actualizarHeroe( this.heroe );
    } else {
      peticion = this.heroesService.crearHeroe( this.heroe );
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Actualizado correcto',
        type: 'success'
      });
    });
  }




}
