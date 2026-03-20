import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Donor } from '../../models/donor.model';

@Component({
  selector: 'app-donor-list',
  standalone: true,
  imports: [TagModule, ButtonModule],
  templateUrl: './donor-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonorListComponent {

  @Input() donors : Donor[] = [];

  @Output() onToggle = new EventEmitter<string>();

  toggle(id: string): void {
    this.onToggle.emit(id);
  }
}
