import {Component, OnInit} from '@angular/core';
import {JokeService} from '../joke.service';
import {Joke} from '../model/joke';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [JokeService]
})

export class SearchComponent implements OnInit {

    joke: Joke;

    constructor(private jokeService: JokeService) {
    }

    ngOnInit() {
        this.jokeService.getJoke().subscribe((data) => {
            this.joke = data;
        });
    }
}
