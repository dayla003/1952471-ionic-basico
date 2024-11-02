import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { alumno } from 'src/models/alumno.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
  styleUrls: ['./lista-alumnos.component.scss'],
})

export class ListaAlumnosComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}
  alumno: alumno = {
      nombre: '',
      presente: false
    };
    alumnos: alumno[] = [];

  agregaAlumno(): void {
    this.alumnos.push(this.alumno);

    this.alumno = {
    nombre: '',
    presente: false
    };
  }

  

}
