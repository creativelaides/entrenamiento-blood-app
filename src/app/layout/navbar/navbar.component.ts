import {ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  items = signal<MenuItem[]>(
    [
      {
        label: 'Donadores',
        icon: 'pi pi-user',
        routerLink: '/donadores'
      },
      {
        label: 'Receptores',
        icon: 'pi pi-users',
        routerLink: '/receptores'
      },
      {
        label: 'Donaciones',
        icon: 'pi pi-sync',
        routerLink: '/donaciones'
      }
    ]
  )

}
