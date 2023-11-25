import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.scss',
})
export class ResourceDetailsComponent {
  resourceDetails!: FormGroup;
  days!: number;
  months!: number;
  resource_time!: string;
  reservation!: string;
  date_counter!: number;
  constructor(private fb: FormBuilder) {}
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
