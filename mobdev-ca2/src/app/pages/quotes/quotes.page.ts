import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: any;
    quoteId: null;
    author = ' ';

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.LoadQuotes();
        //this.quotes = this.api.getQuotes();
        //this.quotes.subscribe(data => {
           // console.log('my dta', ata);
    }

    LoadQuotes() {
        this.api.getQuotes().subscribe(res => {
            this.quotes = res;
        });
    }

    searchBarQuote(event) {

        this.author = event.target.value;

        if (this.author == '') {
            this.LoadQuotes();
            return;
        }

        this.api.searchQuote(this.author).subscribe(data => {
            this.quotes = data;
        }, res => {
            //
            this.quotes = [];
        });
    }

    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

}
