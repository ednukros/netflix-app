import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit {
  comedyArray = [
    {image: '../../assets/Comedia/casi300.webp'},
    {image: '../../assets/Comedia/rickandmorty.webp'},
    {image: '../../assets/Comedia/regresofuturo.webp'},
    {image: '../../assets/Comedia/dictador.webp'},
    {image: '../../assets/Comedia/casi300.webp'},
    {image: '../../assets/Comedia/casi300.webp'}
   
  ]

  constructor(){ }

  ngOnInit(): void {
    
  }
}
