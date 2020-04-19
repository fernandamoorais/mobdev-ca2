import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  character: any;
  characterId = null;
constructor(private navController: NavController, private router: Router) { }



  ngOnInit() {
 this.characterId = this.activatedRoute.snapshot.paramMap.get('id');  }

//falta logica

}
}
