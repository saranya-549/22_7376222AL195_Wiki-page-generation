import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-home.component.html',
  styleUrl: './faculty-home.component.css',
})
export class FacultyHomeComponent {
  isNotificationsVisible = false;

  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }
  constructor(private router: Router) {}
  onFacultyClick() {
    this.router.navigate(['/faculty-form']);
  }
  onFacultyDetails() {
    this.router.navigate(['/details-faculty']);
  }
  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }
}
