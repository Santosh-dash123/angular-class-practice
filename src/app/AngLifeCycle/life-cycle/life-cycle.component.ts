import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent implements AfterViewInit {
  // studentName: string = 'Santosh Dash';

  // studentList: string[] = [];
  // ngOnInit(): void {
  //   this.studentName = 'Bikash';
  //   this.loadStudents();
  // }

  // loadStudents(): void {
  //   this.studentList = ['Rahul', 'Amit', 'Santosh'];
  // }

  // count: number = 0;
  // timer: any;

  // ngOnInit(): void {
  //   this.timer = setInterval(() => {
  //     this.count++;
  //     console.log(this.count);
  //     if (this.count == 10000) {
  //       this.handleTimeCompletion();
  //     }
  //   }, 10);
  // }

  // handleTimeCompletion() {
  //   clearInterval(this.timer);
  //   console.log('Component Destroryed !');
  // }
  // ngOnDestroy(): void {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //     console.log('Component Destroryed !');
  //   }
  // }

  @ViewChild('userNameInput') userNameInput!: ElementRef;
  @ViewChild('fatherNameInput') fatherNameInput!: ElementRef;
  ngAfterViewInit(): void {
    this.userNameInput.nativeElement.focus();
    this.fatherNameInput.nativeElement.focus();
  }
}
