import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any[]=[];
  imgArtista:any;
  nameArtista:string;
  identificador:string;

  constructor( private activatedRoute:ActivatedRoute,
                private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
          .map(parametros => parametros['id'])
          .subscribe( id => {
            // console.log( id );
            this._spotifyService.getArtista( id )
                  .subscribe( data => this.artista = data );

            // this._spotifyService.getIdArtista( id )
            //       .subscribe( data => this.identificador = data );

            // this._spotifyService.getImgArtista( id )
            //       .subscribe( data => this.imgArtista = data );

            // this._spotifyService.getNameArtista( id )
            //       .subscribe( data => this.nameArtista = data );

            this._spotifyService.getTop( id )
                  .subscribe( data => this.pistas = data );
        });
  }

}
