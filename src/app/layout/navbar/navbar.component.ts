import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {

  //TODO: Cambiar a un para obtener los items del menú pero desde un array de objetos

  items = signal<MenuItem[]>(
    [
      {
        label: 'Home',
        icon: 'pi pi-user',
        routerLink: '/donadores'
      },
      {
        label: 'About',
        icon: 'pi pi-users',
        routerLink: '/receptores'
      },
      {
        label: 'Contact',
        icon: 'pi pi-sync',
        routerLink: '/donaciones'
      }
    ]
  )

}
