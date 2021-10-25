import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(public fireService: FirebaseServiceService) {
   }

  heroe: HeroeModel = new HeroeModel();
  
  ngOnInit(): void {
  }

  obSubmit(formulario: NgForm){
    if(formulario.invalid) {return}
    if(this.heroe.id){
      console.log("actualizar");
    }else{
      console.log("que onda");
      this.fireService.agregarDato(this.heroe).then(doc => this.heroe.id = doc.id);
    }    
  }

}
