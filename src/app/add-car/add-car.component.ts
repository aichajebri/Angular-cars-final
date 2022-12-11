import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../services/car.service';
import { Groupe } from '../model/groupe.model';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  newCar = new Car();
  groupes!: Groupe[];

  newIdGrp!: number;
  newGroupe!: Groupe;

  message!: string;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.carService.listeGroupes().
    subscribe(grps => {console.log(grps);
    this.groupes = grps._embedded.groupes;
    }
    );
  }

  addCar(){
    this.newCar.groupe = this.groupes.find(grp => grp.idGrp == this.newIdGrp)!;
    this.carService.ajouterCar(this.newCar).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['cars']);
    });

    }


}
