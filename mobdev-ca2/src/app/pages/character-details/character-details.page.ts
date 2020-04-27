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
    Likee = false;

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
        this.likeServices.isLike(this.charId).then(isLike => {
            this.Likee = isLike;

        });
    }

    //the next two methds allow user to like or dislike an Character
    //the Methods were created in like.service.ts
    likeCharacters() {
        this.likeServices.likeCharacters(this.charId).then(() => {
            this.Likee = true;
        });
    }

    dislikeCharacters() {
        this.likeServices.dislikeCharacters(this.charId).then(() => {
            this.Likee = false;
        });
    }

}


