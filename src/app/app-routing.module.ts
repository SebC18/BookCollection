import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';


const routes: Routes = [
  {path : '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'auth/signup' , component: SignupComponent},
  { path: 'auth/signin' , component:SigninComponent},
  { path: 'books', canActivate: [AuthGuardService]  ,component:BookListComponent},
  { path: 'books/new', canActivate: [AuthGuardService],  component: BookFormComponent},
  { path: 'books/view/:id', canActivate: [AuthGuardService],  component:SingleBookComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
