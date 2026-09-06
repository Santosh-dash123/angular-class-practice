import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Department } from '../../Model/department.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-department',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  departmentForm!: FormGroup;

  departments: Department[] = [];

  constructor(private deptService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.deptService.getDepartments().subscribe((response) => {
      if (response.success) {
        this.departments = response.data;
      }
    });
  }

  onSubmit(): void {
    if (this.departmentForm.invalid) {
      this.departmentForm.markAllAsTouched();
      return;
    }

    const department: Department = {
      tenantId: 1,
      departmentName: this.departmentForm.value.departmentName,
      isActive: true,
      createdBy: 1,
    };

    this.deptService.saveDepartment(department).subscribe((response) => {
      if (response.success) {
        Swal.fire(
          'Success!',
          'This department added successfully !',
          'success',
        );
        this.departmentForm.reset();
        this.getDepartments();
      }
    });
  }
}
