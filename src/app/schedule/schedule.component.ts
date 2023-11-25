import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  weekDays = [
    { name: 'السبت', isToggleChecked: true },
    { name: 'الأحد', isToggleChecked: true },
    { name: 'الاثنين', isToggleChecked: true },
    { name: 'الثلاثاء', isToggleChecked: true },
    { name: 'الأربعاء', isToggleChecked: true },
    { name: 'الخميس', isToggleChecked: true },
    { name: 'الجمعة', isToggleChecked: true },
  ];
}
