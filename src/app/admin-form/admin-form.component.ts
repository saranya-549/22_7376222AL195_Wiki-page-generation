import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent {
  courseTitle: string = '';
  facultyInCharge: string = '';
  startDate: string = '';
  endDate: string = '';
  formSubmitted: boolean = false;

  constructor(private router: Router) {}
  onAdmindetails() {
    this.router.navigate(['/details-admin']);
  }

  onClickViewCode() {
    this.router.navigate(['/viewcode']);
  }
  onMainPageClick() {
    this.router.navigate(['/home']);
  }
  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }

  onSubmit(form: any) {
    // Check if the form is valid
    if (form.valid) {
      alert('Admin Form Submitted Successfully');
      this.formSubmitted = true;
      form.reset();
    } else {
      alert('Please fill out all the required fields.');
      this.formSubmitted = false;
    }
  }
}
