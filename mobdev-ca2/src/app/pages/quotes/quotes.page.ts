import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: any;
    quoteId: null;
    author: string = ' ';

    constructor(private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.LoadQuotes();
        //this.quotes = this.api.getQuotes();
        //this.quotes.subscribe(data => {
           // console.log('my dta', ata);
    }

    LoadQuotes() {
        this.api.getQuote(this.author).subscribe(res => {
            this.quotes = res;
        });
    }

    searchQuote(event) {
        this.author = event.target.value;

        if (this.author == '') {
            this.LoadQuotes();
            return;
        }

        this.api.getQuote(this.author).subscribe(data => {
            this.quotes = data;
        }, res => {
            this.quotes = [];
        });
    }

    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

}
