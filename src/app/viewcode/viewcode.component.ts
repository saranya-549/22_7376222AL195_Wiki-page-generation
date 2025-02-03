import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewcode.component.html',
  styleUrls: ['./viewcode.component.css'],
})
export class ViewcodeComponent {
  constructor(private router: Router) {}
  generatedCode: string = `
    // Example Code Snippet
    <!DOCTYPE html>
    <html lang="en">
    <head><title>Simple Page</title></head>
    <body>
        <h1>Hello, World!</h1>
        <p>Welcome to wiki code generator</p>
    </body>
    </html>

  `;

  isNotificationsVisible: boolean = false;

  toggleNotifications(): void {
    this.isNotificationsVisible = !this.isNotificationsVisible;
  }
  onAdminClick() {
    this.router.navigate(['/admin-form']);
  }
  onClickViewCode() {
    this.router.navigate(['/viewcode']);
  }
  onMainPageClick() {
    this.router.navigate(['/home']);
  }
  onAdmindetails() {
    this.router.navigate(['/details-admin']);
  }

  logOut() {
    alert('Signed out successfully');
    this.router.navigate(['/login']);
  }

  downloadCode(): void {
    const blob = new Blob([this.generatedCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-code.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
