import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//this ONE 
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCharacters(offset) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${offset}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    getEpisodes() {
        return this.http.get(`https://breakingbadapi.com/api/episodes`);
    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`);
    }
    getQuotes() {
        return this.http.get(`https://breakingbadapi.com/api/quotes`);
    }
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`);
    }
    getDeaths() {
        return this.http.get(`https://breakingbadapi.com/api/death`);
    }
    searchDeath(search) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${encodeURI(search)}`)
    }

}
