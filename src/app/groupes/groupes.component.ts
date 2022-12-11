import { Component, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { AuthService } from '../services/auth.service';
import { GroupeService } from '../services/groupe.service';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.css']
})

export class GroupesComponent implements OnInit {

  groupes!: Groupe[];




  constructor(private grpService: GroupeService,public authService: AuthService) {

  }

  ngOnInit(): void {
      this.chargerGrp();
  }
  chargerGrp(){
    this.grpService.listeGroupe().subscribe(grps => {
    this.groupes = grps;
    console.log(grps);
    });
    }

  supprimerGroup(g: Groupe)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.grpService.supprimerGrp(g.idGrp).subscribe(() => {
  console.log("Groupe supprimé");
  this.chargerGrp();
  });
  }
}
