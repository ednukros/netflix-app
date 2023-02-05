import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

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


}
