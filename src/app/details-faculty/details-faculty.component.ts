import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-faculty',
  templateUrl: './details-faculty.component.html',
  styleUrls: ['./details-faculty.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule here
})
export class DetailsFacultyComponent {
  isNotificationsVisible = false;

  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }
  constructor(private router: Router) {}

  onFacultyClick() {
    this.router.navigate(['/faculty-form']);
  }
  onMainPageClick() {
    this.router.navigate(['/faculty-home']);
  }
  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }
  onEdit() {
    this.router.navigate(['/faculty-form']);
  }
  searchText: string = '';

  projects = [
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.1,
      topic: 'Learning, Types of Machine Learning',
      lecturematerial: 'unit1.1.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      remarks: 'Nil',
      edit: 'Edit',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.2,
      topic: 'Supervised, Unsupervised Learning',
      lecturematerial: 'unit1.2.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      remarks: 'Nil',
      edit: 'Edit',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.3,
      topic: 'Regression Linear, Multivariate in prediction',
      lecturematerial: 'unit1.3.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      remarks: 'Nil',
      edit: 'Edit',
    },
    {
      subject: '22AM503-MACHINE LEARNING',
      unitno: 1.4,
      topic:
        'Data Objects and attribute types, Basic statistical description of data',
      lecturematerial: 'unit1.4.pdf',
      discourselink: 'https://discourse.bitsathy.ac.in/',
      remarks: 'Nil',
      edit: 'Edit',
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
