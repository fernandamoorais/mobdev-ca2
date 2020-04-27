import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'likeCharacter';
const STORAGE_KEY2 = 'likeEpisodes;'

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private storage: Storage) { }
//All the code for this service is based on the code shown in Mobile development classes

    //ive decided that for episodes i would call the methods Favorite. and use the star as icon.
    getAllFavouriteEps() {
        return this.storage.get(STORAGE_KEY2);
    }

    isFav(episodeId) {
        return this.getAllFavouriteEps().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEp(episodeId) {
        return this.getAllFavouriteEps().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY2, result);
            } else {
                return this.storage.set(STORAGE_KEY2, [episodeId]);
            }
        });
    }

    unfavouriteEp(episodeId) {
        return this.getAllFavouriteEps().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY2, result);
            }
        });
    }
    //Same Logic but Know for Like/Dislike for Characters and using thumbs as icon

    getAllLikeCharacters() {
        return this.storage.get(STORAGE_KEY);
    }

    isLike(charId) {
        return this.getAllLikeCharacters().then(result => {
            return result && result.indexOf(charId) !== -1;
        });
    }

    likeCharacters(charId) {
        return this.getAllLikeCharacters().then(result => {
            if (result) {
                result.push(charId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [charId]);
            }
        });
    }

    dislikeCharacters(charId) {
        return this.getAllLikeCharacters().then(result => {
            if (result) {
                var index = result.indexOf(charId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }

}