import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { contactResolver } from './resolvers/contact.resolver';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { authGuard } from './gurdes/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupPageComponent },
  { path: 'contact', component: ContactPageComponent, canActivate: [authGuard], },
  { path: 'edit', component: ContactEditPageComponent, canActivate: [authGuard] },
  {
    path: 'edit/:id', component: ContactEditPageComponent,
    canActivate: [authGuard],
    resolve: { contact: contactResolver }
  },
  {
    path: 'contact/:id', component: ContactDetailsPageComponent,
    canActivate: [authGuard],
    resolve: { contact: contactResolver }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
