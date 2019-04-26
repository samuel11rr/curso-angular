import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  pistas:any[]=[];
  imgArtista:any;
  nameArtista:string;
  identificador:string;
  loading: boolean = false;

  constructor(  private router:ActivatedRoute,
                private spotify:SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params =>{
      this.getTopTracks( params['id'] );
      this.getArtista( params['id'] );
    });

  }

  ngOnInit() {
    // this.router.params
    //       .map(parametros => parametros['id'])
    //       .subscribe( id => {
    //         // console.log( id );
    //         this._spotifyService.getArtista( id )
    //               .subscribe( data => this.artista = data );

    //         // this._spotifyService.getIdArtista( id )
    //         //       .subscribe( data => this.identificador = data );

    //         // this._spotifyService.getImgArtista( id )
    //         //       .subscribe( data => this.imgArtista = data );

    //         // this._spotifyService.getNameArtista( id )
    //         //       .subscribe( data => this.nameArtista = data );

    //         this._spotifyService.getTop( id )
    //               .subscribe( data => this.pistas = data );
    //     });
  }


  getArtista( id:string ){
    this.spotify.getArtista( id )
                .subscribe( artista => {
                  this.artista = artista;
                  this.loading = false;
                });
  }

  getTopTracks( id:string ){
    this.spotify.getTop(id)
                .subscribe(tracks => {
                  this.pistas = tracks;
                  // this.loading = false;
                });
  }

}
