import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Kys } from 'src/app/model/kys';
import { KysService } from 'src/app/service/kys.service';

@Component({
  selector: 'app-newkys',
  templateUrl: './newkys.component.html',
  styleUrls: ['./newkys.component.css']
})
export class NewkysComponent implements OnInit {

  nombreE: string;
  descripcionE: number;
  descripcionE2: number;
  descripcionE3: number;
  descripcionE4: number;
  descripcionE5: number;
  descripcionE6: number;
  descripcionE7: string;
  descripcionE8: string;
  descripcionE9: string;
  descripcionE10: string;
  descripcionE11: string;
  descripcionE12: string;

  constructor(private kysS: KysService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const kys = new Kys(this.nombreE, this.descripcionE, this.descripcionE2, this.descripcionE3, this.descripcionE4, this.descripcionE5, this.descripcionE6
      , this.descripcionE7, this.descripcionE8, this.descripcionE9, this.descripcionE10, this.descripcionE11, this.descripcionE12);
    this.kysS.save(kys).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }




}
