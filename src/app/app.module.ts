import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';


// Servicios
import { SpotifyService } from './services/spotify.service';
import { NoimagenPipe } from './pipes/noimagen.pipe';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoimagenPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
