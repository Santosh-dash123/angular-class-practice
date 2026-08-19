import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  constructor(private router: ActivatedRoute) {}
  employeeid: number = 0;
  employeename: string = '';
  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      this.employeeid = Number(params.get('id')) || 0;
      this.employeename = params.get('name') || '';
    });
  }
}
