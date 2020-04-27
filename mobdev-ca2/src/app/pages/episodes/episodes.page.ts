import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

//using the same logic as Character.ts
@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: any;
    episodeId = null;
    page = 0;
    
    
    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.episodes = this.api.getEpisodes();
    }

    openDetails(episode) {

        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`)
        console.log(episodeId);
    }



}
