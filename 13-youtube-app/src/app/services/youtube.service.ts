import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = [YOURAPIKEY];
  private playlistId = 'PLCKuOXG0bPi2WNLzimZB7GRSTgqj0J132';
  private nextPageToken = '';

  constructor( private http: HttpClient ) { }

  getVideos() {
    let url = `${ this.youtubeUrl }/playlistItems?part=snippet&playlistId=${ this.playlistId }&maxResults=10&key=${ this.apiKey }`;

    if (this.nextPageToken) {
     `${ url }&nextPageToken=${ this.nextPageToken }`;
    }

    return this.http.get( url )
                    .pipe(
                          map( (res:any) => {
                            console.log(res);
                            this.nextPageToken = res.nextPageToken;
                            let videos:any[] = [];
                            for( let video of res.items ) {
                              let snippet = video.snippet;
                              videos.push(snippet);
                            }
                            return videos;
                          })
                        );
  }
}
