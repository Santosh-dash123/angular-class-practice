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
  departmentForm!: FormGroup; //Create Department Form

  updateForm!: FormGroup; //Update Department Form

  departments: Department[] = [];

  constructor(private deptService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentForm = new FormGroup({
      departmentName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.updateForm = new FormGroup({
      id: new FormControl(null),
      tenantId: new FormControl(1),
      departmentName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      isActive: new FormControl(true),
      createdBy: new FormControl(1),
      modifiedBy: new FormControl(1),
    });

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

  getParticularDept(id: number): void {
    this.deptService.getDepartmentById(id).subscribe({
      next: (response) => {
        if (response.success && response.data.length > 0) {
          const department = response.data[0];

          this.updateForm.patchValue({
            id: department.id,
            tenantId: department.tenantId,
            departmentName: department.departmentName,
            isActive: department.isActive,
            createdBy: department.createdBy,
            modifiedBy: 1,
          });
        }
      },
      error: (error) => {
        Swal.fire(
          'Internet Issue',
          'Failed to load particular department',
          'error',
        );
      },
    });
  }
}
