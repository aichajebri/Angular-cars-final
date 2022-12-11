import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { GroupeService } from '../services/groupe.service';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.css']
})
export class UpdateGroupeComponent implements OnInit {
  currentGrp = new Groupe();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
  private grpService: GroupeService) { }
  ngOnInit() {
  this.grpService.consulterGrp(this.activatedRoute.snapshot.params['id']).subscribe( grp =>{ this.currentGrp = grp; } ) ;

  }
  updateGrp() {
    this.grpService.updateGrp(this.currentGrp).subscribe(grp => {
    this.router.navigate(['groupes']); }
    );
    }

}

