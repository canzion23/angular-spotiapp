import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = { };
  pistas_1: any = { };

  constructor(private activatedRoute: ActivatedRoute,
              public  _spotify: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params.map( params => params['id']).subscribe( id => {
      console.log('Id Artist: ' + id );

      this._spotify.getArtista( id ).subscribe( artistaObtenido => {
        // console.log('Objeto artista:');
        // console.log(artistaObtenido);
        this.artista = artistaObtenido;

      });

      this._spotify.getTopTracks( id ).subscribe();

  });



      }
}
