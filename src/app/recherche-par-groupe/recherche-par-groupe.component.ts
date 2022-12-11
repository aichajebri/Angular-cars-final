import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { Groupe } from '../model/groupe.model';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recherche-par-groupe',
  templateUrl: './recherche-par-groupe.component.html',
  styleUrls: ['./rechercheGrp.component.css']
})
export class RechercheParGroupeComponent implements OnInit {
  cars! : Car[];
  IdGrp! : number;
  groupes! : Groupe[];

  constructor(private carService:CarService,public authService: AuthService ) { }

  ngOnInit(): void {
    this.carService.listeGroupes().
    subscribe(grps => {this.groupes = grps._embedded.groupes;
    console.log(grps);
    }
    );
}
onChange() {
  this.carService.rechercherParGroupe(this.IdGrp).
  subscribe(cars =>{this.cars=cars});
  }
  chargerCars(){
    this.carService.listeCar().subscribe(cars => {
    console.log(cars);
    this.cars = cars;});
    }

    supprimerCars(a: Car)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.carService.supprimerCar(a.idCar).subscribe(() => {
    console.log("Car Deleted");
    this.chargerCars();
    });
    }
}
