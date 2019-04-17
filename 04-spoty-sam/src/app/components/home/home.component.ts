import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) {

    // prueba con restcountries
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data:any) => {

        this.paises = data;
        console.log(data);
        
    })

  }

  ngOnInit() {
  }

}
