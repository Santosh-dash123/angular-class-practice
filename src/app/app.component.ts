import { Component } from '@angular/core';
//import { ParentComponent } from './compCommunication/parent/parent.component';
// import { HomeComponent } from './routing/home/home.component';
//import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';
// import { RouterOutlet } from '@angular/router';
// import { RouterLink } from '@angular/router';
// import { RegistrationComponent } from './forms/registration/registration.component';

//import { LifeCycleComponent } from './AngLifeCycle/life-cycle/life-cycle.component';

// import { ServiceComponent } from './services/service/service.component';

//import { PostComponent } from './DUMMYAPI/Component/post/post.component';
//import { DepartmentComponent } from './DeptMstPage/Component/department/department.component';

import { SignalComponent } from './StateManagement/signal/signal.component';
@Component({
  selector: 'name-root',
  imports: [SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
