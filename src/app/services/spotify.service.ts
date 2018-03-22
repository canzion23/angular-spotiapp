import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  // Arreglo de artistas devueltos por el API de Spotify
  artistas_1: any[] = [];
  tracks: any[] = [];

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDRY3nqo4B3STzqqoT-qttanYsKZ0Sl-LwpHOiJmrpJFX67OQjLFtgp9YXn_60wQQ5dQ0OarlZtyx5Hx-M';

  constructor(public http: HttpClient) {
    console.log('Servicio Spotify, listo!');

  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  // Metodo del servicio que obtiene los artistas coincidentes con el término de busqueda.
  getArtistas(termino: string) {

    let url = `${this.urlSpotify}search?query=${termino}&type=artist&&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((resp: any) => {
        this.artistas_1 = resp.artists.items;
        // console.log(this.artistas_1);
        return this.artistas_1;
      });
  }

  getTopTracks( id: string ) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers } )
    .map( (resp: any ) => {
      this.tracks = resp.tracks;
      console.log(this.tracks);
    });
  }

  // Este Método devuelve únicamente la información referente al artista que recibe como parametro!
  getArtista(id: string) {
    let url = `${this.urlSpotify}artists/${id}`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
    // .map((resp: any) => {
    //   this.artistas = resp.artists.items;
    //   return this.artistas;
    // });
  }

  }
