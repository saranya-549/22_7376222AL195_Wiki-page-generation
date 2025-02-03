import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule here
})
export class DetailsAdminComponent {
  isNotificationsVisible = false;

  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }
  constructor(private router: Router) {}
  onClickViewCode() {
    this.router.navigate(['/viewcode']);
  }

  onAdminClick() {
    this.router.navigate(['/admin-form']);
  }
  onMainPageClick() {
    this.router.navigate(['/home']);
  }
  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }
  searchText: string = '';

  projects = [
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.1,
      topic: 'Learning, Types of Machine Learning',
      lecturematerial: 'unit1.1.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM601-NATURAL LANGUAGE PROCESSING',
      unitno: 1.1,
      topic: 'Introduction to NLP',
      lecturematerial: 'unit1.1.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.2,
      topic: 'Supervised, Unsupervised Learning',
      lecturematerial: 'unit1.2.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.3,
      topic: 'Regression Linear, Multivariate in prediction',
      lecturematerial: 'unit1.3.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM601-NATURAL LANGUAGE PROCESSING',
      unitno: 1.2,
      topic: 'Text pre-processing techniques and Specific NLP applications',
      lecturematerial: 'unit1.1.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.4,
      topic:
        'Data Objects and attribute types, Basic statistical description of data',
      lecturematerial: 'unit1.4.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
    {
      subject: '22AM601-NATURAL LANGUAGE PROCESSING',
      unitno: 1.3,
      topic: 'Regular Expressions, Words',
      lecturematerial: 'unit1.1.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      edit: 'Nil',
    },
  ];

  filteredProjects = this.projects;

  applyFilter() {
    this.filteredProjects = this.projects.filter((project) =>
      Object.values(project).some((value) =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }
}
