import { computed, effect, Injectable, signal } from "@angular/core";
import { Donor } from "../models/donor.model";
import { DonorsService } from "../services/donors.service";

@Injectable({
  providedIn: 'root'
})
export class DonorsStore {
  private readonly _donors = signal<Donor[]>([]);

  readonly donors = this._donors.asReadonly();

  readonly availableDonors = computed(() => this._donors().filter(donor => donor.available));

  readonly unavailableDonors = computed(() => this._donors().filter(donor => !donor.available));

  readonly totalDonors = computed(() => this._donors().length);

  /**
   *
   */
  constructor(private service: DonorsService) {
    this.loadDonors();

    effect(() => {
      console.log('Donors updated:', this._donors());
    })
  }

  loadDonors() :void {
    this._donors.set(this.service.getAll());
  }

  addDonor(donor: Omit<Donor, 'id'>): void {
    const newDonor = this.service.create(donor);
    this._donors.update(donors => [...donors, newDonor]);
  }

  toggleAvailability(id: string): void {
    this.service.toggleAvailability(id);
    this._donors.update(donors => donors.map(donor =>
      donor.id === id ? { ...donor, available: !donor.available } : donor
    ));
  }
}
