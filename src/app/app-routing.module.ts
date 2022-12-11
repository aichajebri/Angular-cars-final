import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { GroupesComponent } from './groupes/groupes.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CarGuard } from './car.guard';



const routes: Routes = [
  {path: "cars", component : CarsComponent},
  {path : "add-car", component : AddCarComponent, canActivate:[CarGuard]},
  { path: "", redirectTo: "cars", pathMatch: "full" },
  {path: "updateCar/:id", component: UpdateCarComponent},
  {path: "groupes", component : GroupesComponent},
  {path: "add-grp", component : AddGrpComponent},
  {path: "updateGrp/:id", component : UpdateGroupeComponent},
  {path: "rechercheParGroupe", component : RechercheParGroupeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
