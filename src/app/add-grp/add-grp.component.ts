import { Component, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { GroupeService } from '../services/groupe.service';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-add-grp',
  templateUrl: './add-grp.component.html',
  styleUrls: ['./add-grp.component.css']
})
export class AddGrpComponent implements OnInit {
  newGrp= new Groupe();
  groupes!: Groupe[];

  newIdGrp!: number;


  constructor(private grpService: GroupeService, private router: Router) { }
    ngOnInit() {

    }


    addGrp(){
      this.grpService.ajouterGrp(this.newGrp).subscribe(grps => {
      console.log(grps);
      this.router.navigate(['groupes']);
      });
      }

}
