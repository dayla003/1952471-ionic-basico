import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonLabel, IonItem, IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor]
})
export class ListaAlumnosComponent  implements OnInit {
  alumnos: any = [
    "Dayla Marely",
    "Hector Camacho",
    "Marcela Elena",
    "Mariana Andrea",
    "Brenda Alicia"
  ];

  constructor() { }
  ngOnInit() {}
  

}
