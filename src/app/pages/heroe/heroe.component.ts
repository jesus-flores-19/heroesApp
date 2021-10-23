import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/modelos/heroe.modelo';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  heroe: HeroeModel = new HeroeModel();
  
  ngOnInit(): void {
  }

}
