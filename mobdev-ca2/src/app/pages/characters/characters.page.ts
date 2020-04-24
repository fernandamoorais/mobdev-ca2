import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: any;
    offset: any;
    page=0;
    

    constructor(private router: Router, private api: ApiService) {
        this.loadCharacters();
    }

    ngOnInit() {

        this.characters = this.api.getCharacters(this.offset);
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(character) {

        let charId = character.char_id;

        this.router.navigateByUrl(`/tabs/characters/${charId}`);

    }
    loadCharacters(event?) {
        this.api.getCharacters(this.offset).subscribe(res=>{
            this.characters=this.characters.concat(res);
            if(event){
                event.target.complete();
            }
        });
          
    }
    loadMore(event) {
      
        this.offset+=10;
        this.loadCharacters(event);
        
    }
}

