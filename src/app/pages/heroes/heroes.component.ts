import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes: any;

  constructor(public fireService: FirebaseServiceService, private router: Router) { 
    this.fireService.obtenerHeros().then(data => {
      this.Heroes = data
      console.log(this.Heroes);
    });
  }
  borrar(id: string, i: number){
    this.fireService.eliminarDoc(id)
    this.Heroes.splice(i,1)

    console.log(id);
    
  }
  modificar(id:string){
    this.router.navigate(["heroe", id])
  }

  ngOnInit(): void {
  }

}
