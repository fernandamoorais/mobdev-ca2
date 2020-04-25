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
    Like = false;


    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private likeServices: LikeService) { }
    
    ngOnInit() {
         this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
 
      this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
      console.log(JSON.stringify(this.episode.episode_id));
       });

       this.likeServices.Like(this.episodeId).then(isLik => {
      this.Like = isLik;
    });
  }

  likeEpisode() {
    this.likeServices.likeEpisode(this.episodeId).then(() => {
      this.Like = true;
    });
  }
 
  dislikeEpisode() {
    this.likeServices.dislikeEpisode(this.episodeId).then(() => {
      this.Like = false;
    });
  }

}