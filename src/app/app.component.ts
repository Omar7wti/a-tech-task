import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer } from '../app/Counter/counter.reducer';
import { CounterTestComponent } from './counter-test/counter-test.component';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourcesTypeComponent } from './components/resources-type/resources-type.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    CounterTestComponent,
    StoreModule,
    NewResourceComponent,
    ResourceDetailsComponent,
    ResourcesTypeComponent,
  ],
})
export class AppComponent {
  title = 'a-tech';
}
StoreModule.forRoot({ counter: counterReducer });
