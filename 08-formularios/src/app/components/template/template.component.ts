import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais: "",
    sexo:"",
    acepta: false
  }

  paises = [
    {
      codigo:"MX",
      nombre:"México"
    },
    {
      codigo: "ES",
      nombre: "España"
    }
  ];

  sexos:string[] = ["Hombre","Mujer","Indefinido"];

  constructor() { }

  ngOnInit() {
  }

  guardar( forma:NgForm ){
    // console.log("formulario posteado");
    console.log( "ngForm", forma);
    console.log( "valor forma", forma.value );

    console.log( "usuario", this.usuario );
  }

}
