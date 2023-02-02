import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string | undefined;
  title = 'first-routed-app';
  obsTrack: Observable<Object> | undefined;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public spotify: SpotifyService) {
   
  }

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }
}
