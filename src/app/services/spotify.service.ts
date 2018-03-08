import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable()
export class SpotifyService {

  // Arreglo de artistas devueltos por el API de Spotify
  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQA_AoEtloaZhFXtFiwr6v0iHjlhaA89vLEZAmVv4GZgkyq4UTEIjwDLDcMqFpbZW0XA0tlijGlK8UnmZlY';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify, listo!');
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getTop(id: string) {
    
    let url = `${this.urlSpotify}artists/${id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtista( id: string ) {
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
        // .map((resp: any) => {
        //   this.artistas = resp.artists.items;
        //   return this.artistas;
        // });
  }

  getArtistas(termino: string) {

    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
        .map( (resp: any) => {
          this.artistas = resp.artists.items;
          return this.artistas;
          });

  }

}
