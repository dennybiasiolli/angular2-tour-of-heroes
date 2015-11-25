import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/heroes.tpl.html',
    styleUrls: ['app/heroes.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

class AppComponent {
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
    getSelectedClass(hero: Hero) {
        return { 'selected': hero === this.selectedHero };
    }
}

bootstrap(AppComponent);

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];