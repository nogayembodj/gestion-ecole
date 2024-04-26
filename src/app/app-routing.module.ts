import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  { path: 'classes', component: ClassesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lists', component: ListsComponent },
  { path: '', redirectTo: '/lists', pathMatch: 'full' }, // Route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
