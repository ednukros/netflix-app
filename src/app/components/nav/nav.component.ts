import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  

  constructor(private router: Router) { 
   
  }
  routes = this.router.config.map((route: Route) => route?.path || 'Home');
  pageTitle = 'Home';
  altText = 'logue of streamer service'
 
  
  ngOnInit(): void {

  }

  changeRoute(route: string): void {
    this.pageTitle = route;
    const pathToGo = route === 'Home' ? '/' : route;
    this.router.navigate([pathToGo]);
  }
}
