import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls :['app/heroes.component.css'],
  directives:[HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;
    errorMessage : String;
	constructor(
		private _router: Router,
		private _heroService: HeroService) { }
	getHeroes() {
				this._heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}

