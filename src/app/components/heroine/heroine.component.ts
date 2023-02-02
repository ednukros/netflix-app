import { Component, OnInit } from '@angular/core';
import { IHeroine } from '../models/iheroine';

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent implements OnInit {

  public heroineArray: IHeroine[] = [

    {
      image: '../../assets/Top10/1-papel.webp',
      number: 1
    },
    
    {
      image: '../../assets/Top10/2-reina.webp',
      number: 2
    },
    
    {
      image: '../../assets/Top10/3-titanes.webp',
      number: 3
    },
    
    {
      image: '../../assets/Top10/4-lostinspace.webp',
      number: 4
    },
    
    {
      image: '../../assets/Top10/5-dondecaben.webp',
      number: 5
    },

  ]

  constructor() { }

  ngOnInit(): void {

  }

}

