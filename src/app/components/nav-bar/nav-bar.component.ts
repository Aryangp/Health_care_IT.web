import { Component } from '@angular/core';
import { NavBarItem } from 'src/interfaces/navBar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    navItems:NavBarItem[]=[
      {
        displayName: 'Home',
        route: '/'
      },
      {
        displayName: 'About',
        route: '/about'
      },
      {
        displayName: 'Login',
        route: '/login'
      },
      {
        displayName: 'Register',
        route: '/register'
      }
    ]
}
