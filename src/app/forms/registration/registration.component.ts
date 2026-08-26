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
  //Add Form Model
  registration: Registration = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    cityid: 0,
    city: '',
  };

  //Edit Form Model
  editRegistration: Registration = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    cityid: 0,
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
    { id: 7, name: 'Ganjam' },
  ];

  userRegistration() {
    //Validate All Fields
    if (!this.validateUser(this.registration)) {
      return;
    }

    //Get Particular city name using it's id
    const selectedCity = this.citieslist.find(
      (x) => x.id == Number(this.registration.cityid),
    );

    //Generate Id Number
    const newId =
      this.registrationList.length === 0 ? 1 : this.registrationList.length + 1;

    this.registrationList.push({
      id: newId,
      name: this.registration.name.trim(),
      email: this.registration.email.trim(),
      phoneNumber: this.registration.phoneNumber.trim(),
      cityid: this.registration.cityid,
      city: selectedCity?.name || 'N/A',
    });

    Swal.fire({
      icon: 'success',
      title: 'User Registered',
      text: 'User Onboard Successfully!',
    });

    this.resetForm();
  }

  resetForm() {
    this.registration = {
      id: 0,
      name: '',
      email: '',
      phoneNumber: '',
      cityid: 0,
      city: '',
    };
  }

  //Method For Edit User
  editUser(id: number) {
    if (id > 0) {
      const user = this.registrationList.find((x) => x.id === id);
      if (!user) {
        return;
      } else {
        this.editRegistration = { ...user };
      }
    }

    const modalElement = document.getElementById('editUserModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  //Update User Code
  updateUser(): void {
    //Validate All Fields
    if (!this.validateUser(this.editRegistration)) {
      return;
    }

    const index = this.registrationList.findIndex(
      (x) => x.id === this.editRegistration.id,
    );

    this.registrationList[index] = {
      id: this.editRegistration.id,
      name: this.editRegistration.name,
      email: this.editRegistration.email,
      phoneNumber: this.editRegistration.phoneNumber,
      cityid: this.editRegistration.cityid,
      city: this.editRegistration.city,
    };
    this.closeModal();
    Swal.fire({
      icon: 'success',
      title: 'User Updated',
      text: 'User Modified Successfully!',
    });
  }

  closeModal() {
    const modalElement = document.getElementById('editUserModal');
    if (modalElement) {
      // getOrCreateInstance ensures the instance exists before calling hide
      const modal = (window as any).bootstrap.Modal.getOrCreateInstance(
        modalElement,
      );
      modal.hide();
    }
  }
  //Method For Delete User
  deleteUser(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Filter out the deleted user
        this.registrationList = this.registrationList.filter(
          (x) => x.id !== id,
        );

        // Trigger success notification
        Swal.fire({
          title: 'Deleted!',
          text: 'The user has been deleted.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
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
    //City Required validation
    if (!user.cityid) {
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
