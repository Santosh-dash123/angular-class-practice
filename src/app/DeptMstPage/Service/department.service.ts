import { Injectable } from '@angular/core';
import { Department } from '../Model/department.model';
import { DepartmentResponse } from '../Model/department.model';
import { API_CONFIG } from '../APICONSTANT/api.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  //This service is used for get department
  getDepartments(): Observable<DepartmentResponse> {
    return this.http.get<DepartmentResponse>(`${API_CONFIG.GET_BASE_URL}`);
  }

  //This service is used for post department
  saveDepartment(data: Department): Observable<any> {
    return this.http.post(`${API_CONFIG.POST_BASE_URL}`, data);
  }

  //Get Particular department by id
  getDepartmentById(id: number): Observable<DepartmentResponse> {
    return this.http.get<DepartmentResponse>(
      `${API_CONFIG.GET_BASE_URL}?id=${id}`,
    );
  }

  //Update Department
  updateDepartment(data: Department): Observable<any> {
    return this.http.post(`${API_CONFIG.UPDATE_BASE_URL}`, data);
  }

  //Delete Department
  deleteDepartment(id: number): Observable<any> {
    return this.http.post(`${API_CONFIG.DELETE_BASE_URL}/${id}`, null);
  }
}
