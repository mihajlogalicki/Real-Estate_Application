import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

   public loggedUser : string;
   public items : MenuItem[];

   isUserLoggedIn() {
      this.loggedUser = localStorage.getItem('token');
      if(!!this.loggedUser){
      }
      return this.loggedUser;
   }
   
   menuActions(menu: Menu, event: Event){
      menu.model = [] as MenuItem[];
      menu.model.push(
      { 
          label: 'View Dashboard',
          icon: 'fa-solid fa-dashboard'
      },
      { 
        label: 'My Profile',
        icon: 'fa-solid fa-user'
      },
      { 
        label: 'Sign Out', 
        icon: 'fa-solid fa-right-from-bracket', 
        command: () => {
          localStorage.removeItem('token');
        }
      })
      menu.toggle(event);
   }
}
