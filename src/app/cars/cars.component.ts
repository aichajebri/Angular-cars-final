import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { Groupe } from '../model/groupe.model';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {


  cars!: Car[]; //un tableau cars
  IdGroupe!: number;
  groupes!: Groupe[];
  nomCar!:string;
  allCars! : Car[];
  searchTerm!: string;




  constructor(private carService: CarService,public authService: AuthService) {
  }

  ngOnInit(): void {
        this.chargerCars();
        this.carService.listeCar().subscribe(cars => {
          this.allCars = cars;
          console.log(cars);
          });

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
    console.log("Car deleted");
    this.chargerCars();
    });
    }


        onKeyUp(filterText : string){
          this.cars = this.allCars.filter(item =>
          item.nomCar.toLowerCase().includes(filterText));
          }


}
