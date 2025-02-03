import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed

@Component({
  selector: 'app-faculty-form',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here for ngModel support
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.css'], // Corrected from styleUrl to styleUrls
})
export class FacultyFormComponent {
  subject: string = '';
  courseIntro: string = '';
  courseObjectives: string = '';
  courseOutcomes: string = '';
  formSubmitted: boolean = false;

  constructor(private router: Router) {}
  onFacultydetails() {
    this.router.navigate(['/details-faculty']);
  }

  onMainPageClick() {
    this.router.navigate(['/faculty-home']);
  }
  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }

  onSubmit(form: any) {
    // Check if the form is valid
    if (form.valid) {
      alert('Faculty Form Submitted Successfully');
      this.formSubmitted = true;
      form.reset();
    } else {
      alert('Please fill out all the required fields.');
      this.formSubmitted = false;
    }
  }
}
