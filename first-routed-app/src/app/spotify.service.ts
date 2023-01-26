import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBJMGLCICckrqr0cVI3pa494836rA4G9LHmjmINstsN21yFOgFlM3oRabV_tmAh7INeddEz4GyRQEZ68FlxoxG_B7h3lCmMQ6bXr1UvsJTSDJFlVpGnCz4TgKVAI778rP9njun_5dCAAsyRIqom0IvnaxiOI9mAtf4UGd_XbjZjnfYLBiCRaM972tqrsOKtJLtC'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}