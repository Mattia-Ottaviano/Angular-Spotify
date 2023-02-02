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
        'Bearer BQC47f6Vq21Yw9JRMeygUq0JlBX2gApmdHwcd-IBtEpD7wA5WyTc0D6x05WcupOmq94XFdoF_iI1TbZZht-3CD-Z_Deu8OeF3FKm-KLQCpIEwVxEJlWg3kW6IAzwkpxnIRQi7n8HZtxLSx-di3a7yuhZwqp3DNjk7b3Wb6bQbywC25uxZmZnqrtGRp9dFgJqGgNa'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}