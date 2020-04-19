import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

constructor(private navController: NavController, private router: Router) { }



  ngOnInit() {
      this.characters = this.api.getCharacters();
  }

 openDetails(characters) {
    let characterId = characters.char_id;
    this.router.navigateByUrl(`/tabs/character/${characterId}`);
  }

}
}
