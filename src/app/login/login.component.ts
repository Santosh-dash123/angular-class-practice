import { Component } from '@angular/core';
import { NgClass } from '../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   //template: `<button>Status</button>`,
//   //styleUrl: './login.component.css',
//   // styles: [
//   //   `
//   //     button {
//   //       color: red;
//   //     }
//   //   `,
//   // ],
//   styleUrls: ['./login.component.css', './advance.login.component.css'],
// })

// num = 0; //number

//   // string
//   //number
//   isactive: boolean | any = true;

//   name = 'hii';

//   users: string[] = ['santsoh', 'arip', '']; // array type format
//   listofstudents = {
//     //object type for
//     id: 1,
//     name: 'Santosh Dash',
//     address: ['niladri vihar', 'bbsr'],
//   };

//   //APIResponse<Employee> //Generic Format

//   // enum activeclas={ //enum
//   //   "admin":"admin"
//   // }
//   increment() {
//     this.num++;
//   }

//   decrement() {
//     this.num--;
//   }

//   reset() {
//     this.num = 0;
//   }

// enum UserRole {
//   Admin = 'Admin',
//   User = 'User',
// }
// interface User {
//   id: number;
//   name: string;
//   role: UserRole;
//   isActive: boolean;
// }
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   user: User = {
//     id: 101,
//     name: 'Rocky',
//     role: UserRole.User,
//     isActive: false,
//   };

//   toggleStatus() {
//     this.user.isActive = !this.user.isActive;
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  //name = 'Amit Kumar';

  // changeMyName(event: any) {
  //   //console.log(event.target.value);
  //   this.name = event.target.value;
  // }

  firstNumber: number = 0;
  secondNumber: number = 0;

  result = 0;
  calcSum() {
    this.result = this.firstNumber + this.secondNumber;
  }
}
