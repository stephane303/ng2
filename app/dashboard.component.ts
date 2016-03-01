import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
    errorMessage : String;
	constructor(
		private _router: Router,
		private _heroService: HeroService) {
	}
	ngOnInit() {
				this._heroService.getHeroes()
                     .subscribe(
                    heroes => this.heroes = heroes.slice(0,4),
                       error =>  this.errorMessage = <any>error);

	}
	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
        console.log(hero.id);
		this._router.navigate(link);
	}
}