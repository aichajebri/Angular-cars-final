import { Injectable } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  apiUrlGrp: string = 'http://localhost:8081/cars/api/grp';

  groupe!: Groupe;
  constructor(private http: HttpClient,private authService: AuthService) {
    console.log("Creation du service Groupe");
  }

  listeGroupe(): Observable<Groupe[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<Groupe[]>(this.apiUrlGrp, { headers: httpHeaders });
    //return this.http.get<Groupe[]>(this.apiUrlGrp);
  }

  ajouterGrp(grp: Groupe): Observable<Groupe> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Groupe>(this.apiUrlGrp, grp, { headers: httpHeaders });
  }

  consulterGrp(id: number): Observable<Groupe> {
    let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    const url = `${this.apiUrlGrp}/${id}`;
    return this.http.get<Groupe>(url, { headers: httpHeaders });
  }

  supprimerGrp(id: number) {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    const url = `${this.apiUrlGrp}/${id}`;
    return this.http.delete(url, { headers: httpHeaders });
  }

  updateGrp(grp: Groupe): Observable<Groupe> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<Groupe>(this.apiUrlGrp, grp,{ headers: httpHeaders });
  }
}

