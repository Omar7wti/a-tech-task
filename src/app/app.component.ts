import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NewResourceComponent } from './components/new-resource/new-resource.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourcesTypeComponent } from './components/resources-type/resources-type.component';
import { ScheduleComponent } from './components//schedule/schedule.component';
import { NavComponent } from './components/nav/nav.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    StoreModule,
    NewResourceComponent,
    ResourceDetailsComponent,
    ResourcesTypeComponent,
    ScheduleComponent,
    NavComponent,
  ],
})
export class AppComponent {
  title = 'a-tech';
}
