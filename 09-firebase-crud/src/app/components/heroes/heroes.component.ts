import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {

    this._heroesService.getHeroes()
                        .subscribe( data => {
                          console.log(data);
                          // this.heroes = data;
                          // this.loading=false;
                          setTimeout( () => {
                                              this.loading = false;
                                              this.heroes = data;
                                            }, 1000 )
                        } );
  }

  ngOnInit() {
  }

  borraHeroe( key$:string ){
    this._heroesService.borrarHeroe(key$)
                        .subscribe( respuesta=>{
                          console.log(respuesta);
                          if ( respuesta ) {
                              console.error(respuesta);
                          } else {
                            //cuando se elimino correctamente el registro
                            delete this.heroes[key$];
                          }
                        } )
  }

}
