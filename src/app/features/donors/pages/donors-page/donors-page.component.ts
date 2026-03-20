import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DonorFormComponent } from '../../components/donor-form/donor-form.component';
import { DonorListComponent } from '../../components/donor-list/donor-list.component';
import { DonorsStore } from '../../store/donors.store';
import { Donor } from '../../models/donor.model';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-donors-page',
  standalone: true,
  imports: [DonorListComponent, DonorFormComponent, TagModule],
  templateUrl: './donors-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonorsPageComponent {

  private store = inject(DonorsStore);
  availableDonors = this.store.availableDonors;
  totalDonors = this.store.totalDonors;

  onAddDonor(donor: Omit<Donor, 'id'>): void {
    this.store.addDonor(donor);
  }

  onToggleAvailability(id: string): void {
    this.store.toggleAvailability(id);
  }
}
