import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {

    episodes: any;
    episodeId = null;
    page = 0;
    episode = [];
    http: any;
    constructor(private router: Router, private api: ApiService) {
        this.loadEpisodes();
    }

    ngOnInit() {
        this.episodes = this.api.getEpisodes();
    }

    openDetails(episode) {

        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`)
        console.log(episodeId);
    }

    loadEpisodes(event?) {
        this.http.get(`https://breakingbadapi.com/api/episodes`)
            console.log(res=>{
            this.episode = this.episode.concat(res['results']);
             if (event) {
                event.target.complete();
                }
        });
    }
    loadMore(event) {
            this.page++;
            this.loadEpisodes(event);
        
    }
    //<!--https://ionicframework.com/docs/api/infinite-scroll-->



}
