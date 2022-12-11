import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';
import { Groupe } from '../model/groupe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { GroupeWrapper } from '../model/groupeWrapped.model';
import { AuthService } from "./auth.service";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrlGrp: string = 'http://localhost:8081/cars/grp';

  car!: Car;
  constructor(private http: HttpClient, private authService: AuthService) {
    console.log("Creation du service car");
  }

  listeCar(): Observable<Car[]> {
   let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Car[]>(apiURL + "/all", { headers: httpHeaders });
  }


  /*  listeGroupes(): Observable<GroupeWrapper> {
      return this.http.get<GroupeWrapper>(this.apiUrlGrp);
    }*/
  listeGroupes(): Observable<GroupeWrapper> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<GroupeWrapper>(this.apiUrlGrp, { headers: httpHeaders });
  }

  ajouterCar(cars: Car): Observable<Car> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
   return this.http.post<Car>(apiURL, cars, { headers: httpHeaders });

  }

  supprimerCar(id: number) {
    const url = `${apiURL}/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });
  }
  consulterCar(id: number): Observable<Car> {
    const url = `${apiURL}/${id}`;
  let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Car>(url, { headers: httpHeaders });
  }
  updateCar(cars: Car): Observable<Car> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<Car>(apiURL, cars, { headers: httpHeaders });
  }

  rechercherParGroupe(idGrp: number): Observable<Car[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    const url = `${apiURL}/carsgrp/${idGrp}`;
    return this.http.get<Car[]>(url,{ headers: httpHeaders });
  }
  rechercherParNom(nom: string): Observable<Car[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    const url = `${apiURL}/carsByName/${nom}`;
    return this.http.get<Car[]>(url, { headers: httpHeaders });
  }

}
