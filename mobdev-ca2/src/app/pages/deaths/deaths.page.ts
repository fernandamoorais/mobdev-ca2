import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
       this.death = this.api.getDeath();
  }
openDetails(deathCount) {
    let characterId = characters.char_id;
    this.router.navigateByUrl(`/tabs/character/${characterId}`);
  }

}
