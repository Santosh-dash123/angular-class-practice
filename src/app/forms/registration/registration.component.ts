import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registration } from '../../models/registration.model';
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
  cities: string[] = ['Bbsr', 'Cuttack', 'Kendrapara'];

  userRegistration() {
    //Name validation
    if (!this.registration.name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your name',
      });
      return;
    }
    //Email Required validation
    if (!this.registration.email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your email',
      });
      return;
    }
    //Phone Number Required validation
    if (!this.registration.phoneNumber.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your phone number',
      });
      return;
    }
    //Phone Number Required validation
    if (!this.registration.city.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please select your city',
      });
      return;
    }
    console.log(this.registration);
  }
}
