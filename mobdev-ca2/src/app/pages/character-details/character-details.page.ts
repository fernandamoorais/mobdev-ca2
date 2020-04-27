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
    Like=false;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeServices: LikeService) { }

    ngOnInit() {
    
        this.charId = this.activatedRoute.snapshot.paramMap.get('id'); 
        
        this.api.getCharacter(this.charId).subscribe(res => {
          this.character = res[0];
          console.log(JSON.stringify(this.character.char_id));
       });

      this.likeServices.isLike(this.charId).then(isLike=>{
           this.Like =isLike;

       });
    }
    likeCharacters(){
        this.likeServices.likeCharacters(this.charId).then(() => {
            this.Like = true;
        });
    }

    dislikeCharacters() {
        this.likeServices.dislikeCharacters(this.charId).then(() => {
            this.Like = false;
        });
    }
        
}


