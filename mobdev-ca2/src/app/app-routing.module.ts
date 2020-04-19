import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
//{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
{ path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
{ path: 'character-details', loadChildren: './pages/character-details/character-details.module#CharacterDetailsPageModule' },
{ path: 'character', loadChildren: './pages/character/character.module#CharacterPageModule' },
{ path: 'deaths', loadChildren: './pages/deaths/deaths.module#DeathPageModule' },
{ path: 'episodes-details', loadChildren: './pages/episodes-details/episodes-details.module#EpisodesDetailsPageModule' },
{ path: 'episodes', loadChildren: './pages/episodes/episodes.module#EpisodesPageModule' },
{ path: 'quote-details', loadChildren: './pages/quote-details/quote-details.module#QuoteDetailsPageModule' },
{ path: 'quote', loadChildren: './pages/quote/quote.module#QuotePageModule' },

];
@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule {}