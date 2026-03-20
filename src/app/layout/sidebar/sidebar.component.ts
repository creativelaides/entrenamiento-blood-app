import { ChangeDetectionStrategy,  Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  navItems = signal<NavItem[]>(
    [
      { label: 'Donadores',  icon: 'pi pi-heart',  route: '/donors'    },
      { label: 'Receptores', icon: 'pi pi-users',  route: '/receivers' },
      { label: 'Donaciones', icon: 'pi pi-sync',   route: '/donations' },
    ]
  )
}

interface NavItem {
  label: string;
  icon: string;
  route: string;
}
