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
      'Authorization': 'Bearer BQBk5iYXaNCF94kD8XLAY5jwO44kIFJgVtcqPMVDdBpJ2p_vmYdRmtOhYrzcNSSWLqV4lbpwowzEMvb84Yo'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases(){
    return  this.getQuery('browse/new-releases')
                .pipe(map(data => data['albums'].items));
  }

  getArtistas( termino: string ){
    return  this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map(data => data['artists'].items));
  }


  getArtista( id:string ){
    return this.getQuery(`artists/${ id }`);
    //no es necesario pasarlo por el pipe map
  }

  getTop( id: string ) {
    return  this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data => data['tracks']));
  }
}
