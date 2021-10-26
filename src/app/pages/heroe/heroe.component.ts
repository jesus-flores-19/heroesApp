import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';
import {ActivatedRoute} from "@angular/router"
import Swal from 'sweetalert2'


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();


  constructor(public fireService: FirebaseServiceService, public activateRoute: ActivatedRoute) {
    const rutaActiva = this.activateRoute.snapshot.params.id
    if(rutaActiva === "nuevo"){
      console.log("huevos");
    }else{
      this.fireService.obtenerDoc(rutaActiva).then((doc: any) =>{
          const data: any = doc;
          this.heroe.id = rutaActiva;
          this.heroe.nombre = data.nombre;
          this.heroe.vivo = data.vivo;
          this.heroe.poder = data.poder
      })
    }
   }

  
  ngOnInit(): void {
  }

  obSubmit(formulario: NgForm){
    if(formulario.invalid) {return}

    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    if(this.heroe.id){
      this.fireService.updateDoc(this.heroe)
                .then( ()=> {
                  Swal.close() 
                  Swal.fire({
                    title: "Heroe Actualizado",
                    timer: 2000,
                    icon: "success"
                  })
                });
    }else{
      this.fireService.agregarDato(this.heroe).then(doc => this.heroe.id = doc.id)
                .then( ()=> {
                  Swal.close() 
                  Swal.fire({
                    title: "Heroe agregado",
                    timer: 2000,
                    icon: "success"
                  })
                });
    }    
  }

}
