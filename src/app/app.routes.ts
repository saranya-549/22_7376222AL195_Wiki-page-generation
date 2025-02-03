import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';
import { ViewcodeComponent } from './viewcode/viewcode.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { DetailsFacultyComponent } from './details-faculty/details-faculty.component';
import { DetailsAdminComponent } from './details-admin/details-admin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin-form', component: AdminFormComponent },
  { path: 'faculty-form', component: FacultyFormComponent },
  { path: 'viewcode', component: ViewcodeComponent },
  { path: 'faculty-home', component: FacultyHomeComponent },
  { path: 'details-faculty', component: DetailsFacultyComponent },
  { path: 'details-admin', component: DetailsAdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

