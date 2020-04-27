import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { LikeService } from 'src/app/services/like.service';
//this add the like service that i created. 
import { HttpClientModule } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: any;
    offset: any;
    //collection of character on the one page
    charId = null;
    maxPage = 50;
    //max num of charactrer that it going to display before activate infinite scroll function
    char = [];




    constructor(private router: Router, private api: ApiService) { }
    
    ngOnInit() {

        this.loadCharacters();
        //calling function 
    
        //characters = this.api.getCharacters(this.offset);
        //   this.characters.subscribe(data => {
        //console.log('my data: ', data);
        // });
    }


    loadCharacters(event?) {

        this.api.getCharacters(this.offset).subscribe(res => {
        //with the fuction getCharacter gonna get the data from the API service.
            console.log("My Characters info:", res);
            //to display the info on the browser console, to verify if the api 
            //service is getting the data from the API service
            this.char = this.char.concat(res);
            if (event) {
                event.target.complete();
                //to finish the event
                //to be able to loading another array with 15 characters
            }
        })

    }
    loadMore(event?) {
        // this gonna load more pages.
        this.offset = this.offset + 15;//to increase the counting
        this.loadCharacters(event);
        //

        if (this.offset > this.maxPage) {
            event.target.disabled = true;
        }
        //to finish the function 
    }
    openDetails(character) {

        //to get the details of the characters
        let charId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${charId}`);
        console.log(charId);
    }
}

