import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactusComponent } from './routing/contactus/contactus.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'contactus', component: ContactusComponent },
  { path: 'contactus/:id', component: ContactusComponent },
];
