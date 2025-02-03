import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isDropdownVisible = false;
  isNotificationsVisible = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleNotifications() {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }

  onAdminClick() {
    this.router.navigate(['/admin-form']);
  }
  onAdmindetails(){
    this.router.navigate(['/details-admin']);
  }

  onClickViewCode() {
    this.router.navigate(['/viewcode']);
  }

  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }
}
