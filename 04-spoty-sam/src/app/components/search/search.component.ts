import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";
  artistas: any[] = [];
  loading:boolean;

  constructor(private spotify: SpotifyService ) { }

  ngOnInit() {
  }

  buscarArtista(){
    this.loading = true;
    
    this.spotify.getArtistas( this.termino )
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      })
  }

}
