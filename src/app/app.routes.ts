import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './EMS/login/login.component';
import { DashboardComponent } from './EMS/dashboard/dashboard.component';
import { ProfileComponent } from './EMS/profile/profile.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contactus', component: ContactusComponent },
  // { path: 'contactus/:id', component: ContactusComponent },
  // { path: 'employee', component: EmployeeComponent },

  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: 'profile', component: ProfileComponent }],
  },
];
