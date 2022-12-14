import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { GroupesComponent } from './groupes/groupes.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    UpdateCarComponent,
    GroupesComponent,
    AddGrpComponent,
    UpdateGroupeComponent,
    RechercheParGroupeComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
