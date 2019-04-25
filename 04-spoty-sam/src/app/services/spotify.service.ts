import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDZHYlQWkpTj8_35PsFucho5Y4RcPjG1jbzS1r1tVqzx6VMO36zQXlwzQLq02y9PFr1jdpXUb8-TpBN-hU'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases(){
    return  this.getQuery('browse/new-releases')
                .pipe(map(data => data['albums'].items));
  }

  getArtista( termino: string ){
    return  this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map(data => data['artists'].items));
  }


  // getArtistas( termino:string ){
  //   let query = `?q=${ termino }&type=artist`;
  //   let url = this.urlBusqueda + query;

  //   return this.http.get( url )
  //                   .subscribe( res => {
  //                     this.artistas = res.json().artists.items;
  //                     // this.artistas = res.json().artists.items;
  //                     // console.log( this.artistas );

  //                     // return res.json().artists.items;
  //                   })
  // }

  // getArtista( id:string ){
  //   let query = `/${ id }`;
  //   let url = this.urlArtista + query;

  //   return this.http.get( url )
  //                   .map( res => {
  //                     // console.log(res.json());
  //                     return res.json();
  //                   })
  // }

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

  // getTop( id:string ){
  //   let query = `/${ id }/top-tracks?country=MX`;
  //   let url = this.urlArtista + query;

  //   return this.http.get( url )
  //                   .map( res => {
  //                     // console.log( res.json().tracks );
  //                     return res.json().tracks;
  //                   })
  // }
}
