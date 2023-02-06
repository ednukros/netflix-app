import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public actionArray = [
    {
      images: [
        { image: '../../assets/Accion/equalizer2.webp' },
        { image: '../../assets/Accion/killbill2.webp' },
        { image: '../../assets/Accion/heat.webp' },
        { image: '../../assets/Accion/renacido.webp' },
        { image: '../../assets/Accion/terminator2.webp' },
        { image: '../../assets/Accion/worldwarz.webp' }
      ]
    },
    { categorie: 'Acción' }
  ]

  public animeArray = [
    {
      images: [
        { image: '../../assets/Anime/castilloambulante.webp' },
        { image: '../../assets/Anime/evangelion.webp' },
        { image: '../../assets/Anime/mononoke.webp' },
        { image: '../../assets/Anime/chihiro.webp' },
        { image: '../../assets/Anime/gundam.webp' },
        { image: '../../assets/Anime/porcorosso.webp' }
      ]
    },
    { categorie: 'Anime' }
  ]

  comedyArray = [
   {
    images: [
    {image: '../../assets/Comedia/casi300.webp'},
    {image: '../../assets/Comedia/rickandmorty.webp'},
    {image: '../../assets/Comedia/regresofuturo.webp'},
    {image: '../../assets/Comedia/dictador.webp'},
    {image: '../../assets/Comedia/padresella.webp'},
    {image: '../../assets/Comedia/scarymovie3.webp'}
    ]
   },
   { categorie: 'Comedia' }

  ]
  dramaArray = [
    {
     images: [
      {image: '../../assets/Drama/1917.webp'},
      {image: '../../assets/Drama/arrival.webp'},
      {image: '../../assets/Drama/sombradiablo.webp'},
      {image: '../../assets/Drama/millaverde.webp'},
      {image: '../../assets/Drama/scarface.webp'},
      {image: '../../assets/Drama/noespais.webp'}
     ]
    },
    { categorie: 'Drama' }
 
   ]
   scifiArray = [
    {
     images: [
    {image: '../../assets/Sci-fi/watchmen.webp'},
    {image: '../../assets/Sci-fi/doom.webp'},
    {image: '../../assets/Sci-fi/transformers.webp'},
    {image: '../../assets/Sci-fi/startrek.webp'},
    {image: '../../assets/Sci-fi/12monos.webp'},
    {image: '../../assets/Sci-fi/jumper.webp'}
     ]
    },
    { categorie: 'Ciencia Ficción' }
 
   ]

   terrorArray = [
    {
     images: [
      {image: '../../assets/Terror/infiernoagua.webp'},
      {image: '../../assets/Terror/malasana.webp'},
      {image: '../../assets/Terror/reflejos.webp'},
      {image: '../../assets/Terror/calleterror.webp'},
      {image: '../../assets/Terror/life.webp'},
      {image: '../../assets/Terror/multiple.webp'}
     ]
    },
    { categorie: 'Terror' }
 
   ]
}
