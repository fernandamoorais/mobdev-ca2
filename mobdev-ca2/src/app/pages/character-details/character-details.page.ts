import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    charId = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        //This is our main fuinction to this page, there is no need to a new one as the Character page 
    
        this.charId = this.activatedRoute.snapshot.paramMap.get('id'); 
        
        this.api.getCharacter(this.charId).subscribe(res => {
          this.character = res[0];
          //Honestly I do not know why we use JSON here! :P Not yet! 
          console.log(JSON.stringify(this.character.char_id));
       });
    }

}
