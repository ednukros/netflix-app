import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  animeArray = [

    {image: '../../assets/Anime/castilloambulante.webp'},
    {image: '../../assets/Anime/evangelion.webp'},
    {image: '../../assets/Anime/mononoke.webp'},
    {image: '../../assets/Anime/chihiro.webp'},
    {image: '../../assets/Anime/gundam.webp'},
    {image: '../../assets/Anime/porcorosso.webp'}
  ]

  constructor () { }

  ngOnInit(): void {
    
  }

}
