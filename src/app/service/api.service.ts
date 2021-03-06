import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get(`https://breakingbadapi.com/api/episodes`)
    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters() {
        return this.http.get(`https://breakingbadapi.com/api/characters`);
    }

    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`);
    }
    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }
    getQuotes() {

        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }
    searchDeath(search){
       return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${encodeURI(search)}`)
    }


}
