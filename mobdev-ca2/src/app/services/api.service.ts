import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
//this ONE 
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    quo: Array<any>;
    //empty array to uso on the quotes methds
    constructor(private http: HttpClient) { }

    getCharacters(offset) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=15&offset=${offset}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    getEpisodes() {
        return this.http.get(`https://breakingbadapi.com/api/episodes`)
    }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    }
    getQuotes() {
                return this.http.get(`https://breakingbadapi.com/api/quotes`)
    }
   
    searchQuote(author) {
      return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${encodeURI(author)}`);
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
