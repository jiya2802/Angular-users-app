import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', redirectTo: 'users/:id', pathMatch: 'full' },
  { path: 'users/:id', component: UsersComponent },
  {path:'about',component:AboutComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
