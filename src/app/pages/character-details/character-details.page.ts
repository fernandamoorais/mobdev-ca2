import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LikeService } from 'src/app/services/like.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    charId = null;
    isFavourite = false;

    //this gonna add the features of the services
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeServices: LikeService) { }

    ngOnInit() {
        //Main Function
        this.charId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.charId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.char_id));
        });

        //it checks if the character has alredy a Like or not.
        this.likeServices.isFav(this.charId).then(isFav => {
            this.isFavourite = isFav;

        });
    }

    //the next two methds allow user to favorite or unfavorite an Character
    //the Methods were created in like.service.ts
     favouriteEp() {
        this.likeServices.favouriteEp(this.charId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteEp() {
        this.likeServices.unfavouriteEp(this.charId).then(() => {
            this.isFavourite = false;
        });
    }
}


