import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  obSubmit(formulario: NgForm){
    console.log(formulario);
    console.log(this.heroe);
  }

}
