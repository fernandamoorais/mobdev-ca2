import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { LikeService } from 'src/app/services/like.service';



@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;
    episodeId = null;
    isFavourite = false;


    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeServices: LikeService) { }

    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episode.episode_id));
        });

        this.likeServices.isFav(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    favouriteEp() {
        this.likeServices.favouriteEp(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteEp() {
        this.likeServices.unfavouriteEp(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }

}