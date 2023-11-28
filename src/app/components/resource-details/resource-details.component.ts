import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
})
export class ResourceDetailsComponent {
  resourceDetails!: FormGroup;
  days!: number;
  months!: number;
  resource_time!: string;
  reservation!: string;
  date_counter: number = 30;
  constructor(private fb: FormBuilder) {}
  incrementCounter() {
    this.date_counter += 30;
    this.resourceDetails.get('date_counter')?.setValue(this.date_counter);
  }

  decrementCounter() {
    if (this.date_counter - 30 >= 0) {
      this.date_counter -= 30;
      this.resourceDetails.get('date_counter')?.setValue(this.date_counter);
    } else {
      // Optionally handle or notify the user about invalid decrement
      console.warn('Invalid decrement. Value cannot be less than 0.');
    }
  }

  ngOnInit() {
    this.resourceDetails = this.fb.group({
      days: [''],
      months: [''],
      resource_time: [''],
      reservation: [''],
      date_counter: [''],
    });

    this.resourceDetails.get('days')?.valueChanges.subscribe((value) => {
      this.days = value;
    });
    this.resourceDetails.get('months')?.valueChanges.subscribe((value) => {
      this.months = value;
    });
    this.resourceDetails
      .get('resource_time')
      ?.valueChanges.subscribe((value) => {
        this.resource_time = value;
      });
    this.resourceDetails.get('reservation')?.valueChanges.subscribe((value) => {
      this.reservation = value;
    });
    this.resourceDetails
      .get('date_counter')
      ?.valueChanges.subscribe((value) => {
        this.date_counter = value;
      });
  }

  ngDoCheck() {
    console.log(this.resourceDetails.value);
    console.log(this.reservation);
  }

  onSubmit(): void {
    console.log(this.resourceDetails.value);
  }
}
