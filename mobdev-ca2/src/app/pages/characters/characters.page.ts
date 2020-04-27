import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { LikeService } from 'src/app/services/like.service';
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
    charId = null;
    maxPage = 50;
    char = [];




    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        this.loadCharacters();
        //characters = this.api.getCharacters(this.offset);
        //   this.characters.subscribe(data => {
        //console.log('my data: ', data);
        // });
    }


    loadCharacters(event?) {
        this.api.getCharacters(this.offset).subscribe(res => {
            console.log("My Characters info:", res);
            this.char = this.char.concat(res);
            if (event) {
                event.target.complete();
            }
        })

    }
    loadMore(event?) {

        this.offset = this.offset + 20;
        this.loadCharacters(event);

        if (this.offset > this.maxPage) {
            event.target.disabled = true;
        }

    }
    openDetails(character) {

        let charId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${charId}`);
        console.log(charId);
    }
}

