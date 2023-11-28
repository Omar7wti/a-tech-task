import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-resource',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-resource.component.html',
  styleUrl: './new-resource.component.scss',
})
export class NewResourceComponent {
  newResource!: FormGroup;
  resourceName!: string;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.newResource = this.fb.group({
      userName: [''],
    });

    this.newResource.get('userName')?.valueChanges.subscribe((value) => {
      this.resourceName = value;
    });
  }

  onSubmit(): void {
    console.log(this.newResource.value);
  }
}
