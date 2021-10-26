import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes: any;
  cargando: boolean;

  constructor(public fireService: FirebaseServiceService, private router: Router) { 
    this.cargando = true;    
    this.fireService.obtenerHeros().then(data => {
      this.Heroes = data
      console.log(this.Heroes);
      this.cargando = false;
    });

  }
  borrar(heroe: any, i: number){
    Swal.fire({
      title: "¿Estas seguro?",
      text: `Estas seguro que desea borrar a ${heroe.data.nombre}`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true, 
    }).then((result: any) => {
      if(result.value){
        this.fireService.eliminarDoc(heroe.id)
        this.Heroes.splice(i,1)
      }
    })

  }

  modificar(id:string){
    this.router.navigate(["heroe", id])
  }

  ngOnInit(): void {
  }

}
