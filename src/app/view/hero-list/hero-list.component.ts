/**
 * Created by Administrator on 2017/6/10.
 */
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../../model/hero";
import {Logger} from "../../service/logger.service";

@Component({
  selector: 'hero-list',
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.css"],
})
export class HeroListComponent implements OnInit {
  private heros: Hero[];
  private selectedHero: Hero;
  constructor(private logger: Logger) { }
  public ngOnInit() {
    const h1 = new Hero("shiyu", 18);
    const h2 = new Hero("wudi", 30);
    const heros = [h1, h2];
    this.heros = heros;
  }
  private select(hero: Hero) {
    this.selectedHero = hero;
    this.logger.log(`选择 ${hero.name}`, new Date());
  }
}
