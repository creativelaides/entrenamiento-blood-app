import { BLOOD_TYPES } from './../../models/donor.model';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { Donor } from '../../models/donor.model';


@Component({
  selector: 'app-donor-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, DropdownModule],
  templateUrl: './donor-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonorFormComponent {

  @Output() onSubmit = new EventEmitter<Omit<Donor, 'id'>>();

  form!: FormGroup;

  bloodTypes = BLOOD_TYPES.map(type => ({ label: type, value: type }));

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      bloodType: ['', Validators.required],
      available: [true]
    });
  }

  submit(): void {
    if (this.form.invalid){
      this.onSubmit.emit(this.form.value as Omit<Donor, 'id'>);
      this.form.reset({ available: true });
    }
  }
}
