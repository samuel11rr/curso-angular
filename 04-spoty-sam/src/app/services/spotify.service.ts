import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url )
                    .map( res => {
                      this.artistas = res.json().artists.items;
                      // console.log( this.artistas );

                      // return res.json().artists.items;
                    })
  }

  getArtista( id:string ){
    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url )
                    .map( res => {
                      // console.log(res.json());
                      return res.json();
                    })
  }

  // getIdArtista( id:string ){
  //   let query = `/${ id }`;
  //   let url = this.urlArtista + query;
  //
  //   return this.http.get( url )
  //                   .map( res => {
  //                     // console.log(res.json().id);
  //                     return res.json().id;
  //                   })
  // }
  //
  // getImgArtista( id:string ){
  //   let query = `/${ id }`;
  //   let url = this.urlArtista + query;
  //
  //   return this.http.get( url )
  //                   .map( res => {
  //                     // console.log(res.json().images[1].url);
  //                     return res.json().images[1].url;
  //                   })
  // }
  //
  // getNameArtista( id:string ){
  //   let query = `/${ id }`;
  //   let url = this.urlArtista + query;
  //
  //   return this.http.get( url )
  //                   .map( res => {
  //                     // console.log(res.json().name);
  //                     return res.json().name;
  //                   })
  // }

  getTop( id:string ){
    let query = `/${ id }/top-tracks?country=MX`;
    let url = this.urlArtista + query;

    return this.http.get( url )
                    .map( res => {
                      // console.log( res.json().tracks );
                      return res.json().tracks;
                    })
  }
}
