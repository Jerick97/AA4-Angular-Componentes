import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {
  @Input() nombreHijo : string = 'Nombre Hijo';
  @Output() cambioNombreHijo = new EventEmitter<string>(); //Any son genéricos, debemos especificar la información que emite
  //constructor( private dataService : DataService) { } //declaramos como private porque no planeamos utilizar el servicio fuera de aside.component

  ngOnInit(): void {
  }
  changeNameHijo(){
    this.nombreHijo = 'Jerick';
    this.cambioNombreHijo.emit(this.nombreHijo);
    //this.dataService.nombreUsuario = this.nombreHijo; 
  }
}
