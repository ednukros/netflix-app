import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sci-fi',
  templateUrl: './sci-fi.component.html',
  styleUrls: ['./sci-fi.component.scss']
})
export class SciFiComponent implements OnInit{
  scifiArray = [
    {image: '../../assets/Sci-fi/watchmen.webp'},
    {image: '../../assets/Sci-fi/doom.webp'},
    {image: '../../assets/Sci-fi/transformers.webp'},
    {image: '../../assets/Sci-fi/startrek.webp'},
    {image: '../../assets/Sci-fi/12monos.webp'},
    {image: '../../assets/Sci-fi/jumper.webp'}
   
  ]

  constructor(){ }

  ngOnInit(): void {
    
  }
}
