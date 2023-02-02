import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  actionArray = [

    {image: '../../assets/Accion/equalizer2.webp'},
    {image: '../../assets/Accion/killbill2.webp'},
    {image: '../../assets/Accion/heat.webp'},
    {image: '../../assets/Accion/renacido.webp'},
    {image: '../../assets/Accion/terminator2.webp'},
    {image: '../../assets/Accion/worldwarz.webp'}
  ]

  constructor () { }

  ngOnInit(): void {
    
  }


}
