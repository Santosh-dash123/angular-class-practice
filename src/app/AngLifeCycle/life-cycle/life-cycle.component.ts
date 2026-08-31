import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent implements OnInit {
  studentName: string = 'Santosh Dash';

  studentList: string[] = [];
  ngOnInit(): void {
    this.studentName = 'Bikash';
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentList = ['Rahul', 'Amit', 'Santosh'];
  }
}
