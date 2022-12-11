import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../model/car.model';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-Car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  currentCar = new Car();
   groupes! : Groupe[];
   updatedGrpId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private carService: CarService) { }
  ngOnInit() {
   this.carService.listeGroupes().
   subscribe(grps => {console.log(grps);
   this.groupes = grps._embedded.groupes;
   }
   );
   this.carService.consulterCar(this.activatedRoute.snapshot.params['id']).
   subscribe(anim =>{ this.currentCar = anim;
   this.updatedGrpId = this.currentCar.groupe.idGrp;
   } ) ;

  }

  updateCar() {
    this.currentCar.groupe = this.groupes.find(grp => grp.idGrp == this.updatedGrpId)!;
   this.carService.updateCar(this.currentCar).subscribe(anim => {
   this.router.navigate(['cars']); }
   );
    }

}

