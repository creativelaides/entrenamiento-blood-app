import { Injectable } from '@angular/core';
import { Donor } from '../models/donor.model';

@Injectable({
  providedIn: 'root'
})
export class DonorsService {

  private mockDonors: Donor[] = [
    { id: '1', name: 'John Doe', bloodType: 'A+', available: true },
    { id: '2', name: 'Jane Smith', bloodType: 'O-', available: false },
    { id: '3', name: 'Emily Johnson', bloodType: 'B+', available: true },
    { id: '4', name: 'Michael Brown', bloodType: 'AB-', available: true },
  ];

  getAll():Donor[]{
    return this.mockDonors;
  }

  create(donor: Omit<Donor, 'id'>):Donor{
    const newDonor: Donor = {
      ...donor,
      id: crypto.randomUUID()
    };
    this.mockDonors.push(newDonor);
    return newDonor;
  }

  toggleAvailability(id: string): void {
    const donor = this.mockDonors.find(d => d.id === id);
    if (donor) donor.available = !donor.available;
    }
}
