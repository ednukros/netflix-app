import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {
  terrorArray = [
    {image: '../../assets/Terror/infiernoagua.webp'},
    {image: '../../assets/Terror/malasana.webp'},
    {image: '../../assets/Terror/reflejos.webp'},
    {image: '../../assets/Terror/calleterror.webp'},
    {image: '../../assets/Terror/life.webp'},
    {image: '../../assets/Terror/multiple.webp'}
   
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
