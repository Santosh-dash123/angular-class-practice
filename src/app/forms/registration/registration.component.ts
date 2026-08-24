import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City, Registration } from '../../models/registration.model';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  //Form Model
  registration: Registration = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
  };

  //Array to store submitted data
  registrationList: Registration[] = [];

  //City Dropdown Data
  // citieslist: string[] = ['Bbsr', 'Cuttack', 'Kendrapara', 'Jagatsinghpur'];

  citieslist: City[] = [
    { id: 1, name: 'Bbsr' },
    { id: 2, name: 'Cuttack' },
    { id: 3, name: 'Kendrapara' },
    { id: 4, name: 'Jagatsinghpur' },
    { id: 5, name: 'Bhadrak' },
    { id: 6, name: 'Balasore' },
  ];

  userRegistration() {
    //Validate All Fields
    if (!this.validateUser(this.registration)) {
      return;
    }

    //Get Particular city name using it's id
    const selectedCity =
      this.citieslist.find((x) => x.id == Number(this.registration.city)) || '';

    //Generate Id Number
    const newId =
      this.registrationList.length === 0 ? 1 : this.registrationList.length + 1;

    this.registrationList.push({
      id: newId,
      name: this.registration.name.trim(),
      email: this.registration.email.trim(),
      phoneNumber: this.registration.phoneNumber.trim(),
      city: this.registration.city,
    });

    console.log(this.registrationList);
  }

  validateUser(user: Registration): boolean {
    //Name validation
    if (!user.name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your name',
      });
      return false;
    }
    //Email Required validation
    if (!user.email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your email',
      });
      return false;
    }
    //Phone Number Required validation
    if (!user.phoneNumber.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your phone number',
      });
      return false;
    }
    //Phone Number Required validation
    if (!user.city.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please select your city',
      });
      return false;
    }
    return true;
  }
}
