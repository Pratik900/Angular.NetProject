import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about/about.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';


const routes: Routes = [
  {
    path: 'users',
    component:UserListComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'users/adduser',
    component:UserAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
