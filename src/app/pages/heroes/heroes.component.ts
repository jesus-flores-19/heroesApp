import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';
import { FirebaseServiceService } from 'src/app/service/firebase-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heroes: any;

  constructor(public fireService: FirebaseServiceService) { 
    this.fireService.obtenerHeros().then(data => {
      this.Heroes = data
      console.log(this.Heroes);
    });


  }

  ngOnInit(): void {
  }

}
