import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../Counter/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-test.component.html',
  styleUrl: './counter-test.component.scss',
})
export class CounterTestComponent {
  count!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count! = store.select('count');
  }
  ngOninit() {
    this.store
      .select('count')
      .subscribe((count: any) => console.log(typeof count));
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
