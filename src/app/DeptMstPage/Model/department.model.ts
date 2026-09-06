export interface Department {
  id?: number;
  tenantId: number;
  departmentName: string;
  isActive: boolean;
  createdBy: number;
  createdDate?: string;
  modifiedBy?: number | null;
  modifiedDate?: string | null;
}
export interface DepartmentResponse {
  success: boolean;
  message: string;
  data: Department[];
}
