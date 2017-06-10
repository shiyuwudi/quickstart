/**
 * Created by Administrator on 2017/6/10.
 */
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../../model/hero";

@Component({
  selector: 'hero-detail',
  templateUrl: "./hero-detail.component.html",
})
export class HeroDetailComponent implements OnInit {
  @Input() private  hero: Hero;
  public ngOnInit() {}
}
