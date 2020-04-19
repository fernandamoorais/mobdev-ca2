import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    death: any;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.death = this.api.getDeaths();
    }


}
