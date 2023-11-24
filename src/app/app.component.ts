import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreModule, Store } from '@ngrx/store';
import { counterReducer } from '../app/Counter/counter.reducer';
import { CounterTestComponent } from './counter-test/counter-test.component';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
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
  ],
})
export class AppComponent {
  title = 'a-tech';
}
StoreModule.forRoot({ counter: counterReducer });
