import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[]=[];
  videoSel = null;

  constructor( public youtube: YoutubeService ) {
    this.youtube.getVideos()
    .subscribe( videos => this.videos = videos);
  }

  ngOnInit() {  }

  verVideo( video:any ) {
    this.videoSel = video;

    $('#myModal').modal();
  }

  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

  cargarMas() {
    this.youtube.getVideos()
    .subscribe( videos => this.videos.push.apply( this.videos, videos ));
  }
}
