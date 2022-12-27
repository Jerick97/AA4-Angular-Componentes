import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Inicializamos la variable name
  name : string = "Nombre Usuario";


  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  changeName(){
    this.name = "Emerson Suarez"; //Cambiara el valor de name
    this.dataService.nombreUsuario = this.name; //cambia el valor del nombre en el header
  }
  hijoCambioNombre(nuevoNombre: string){
    this.name = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }
}
