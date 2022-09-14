import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { ServEducacionService } from 'src/app/service/serv-educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.scss']
})
export class EditarEducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private eduServ: ServEducacionService, 
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.details(id).subscribe(
      data=> {
        this.educacion = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.update(id,this.educacion).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
