import { Component } from '@angular/core';

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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  num = 0; //number

  // string
  //number
  isactive: boolean | any = true;

  name = 'hii';

  users: string[] = ['santsoh', 'arip', '']; // array type format
  listofstudents = {
    //object type format
    id: 1,
    name: 'Santosh Dash',
    address: ['niladri vihar', 'bbsr'],
  };

  //APIResponse<Employee> //Generic Format

  // enum activeclas={ //enum
  //   "admin":"admin"
  // }
  increment() {
    this.num++;
  }

  decrement() {
    this.num--;
  }

  reset() {
    this.num = 0;
  }
}
