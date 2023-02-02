import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit {
  dramaArray = [
    {image: '../../assets/Drama/1917.webp'},
    {image: '../../assets/Drama/arrival.webp'},
    {image: '../../assets/Drama/sombradiablo.webp'},
    {image: '../../assets/Drama/millaverde.webp'},
    {image: '../../assets/Drama/scarface.webp'},
    {image: '../../assets/Drama/noespais.webp'}
   
  ]

  constructor(){ }

  ngOnInit(): void {
    
  }
}
