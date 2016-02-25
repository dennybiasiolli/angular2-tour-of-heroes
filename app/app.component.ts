import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.tpl.html',
  styleUrls: ['app/styles/app.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) { }
  public title = 'Tour of Heroes';
  selectedHero: Hero;
  public heroes: Hero[];
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
