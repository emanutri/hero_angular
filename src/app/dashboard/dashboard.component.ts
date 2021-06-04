import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
   this.getHeroes();
  /* this.heroService.getHeroes().subscribe(
    data =>
    {
        console.log(data);
        this.heroes = data;
    }
  );*/
 // this.right = data.length ? data : [data]
    
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes = Array.from(Object.values(heroes)));
  }
  
}
