import { Component } from '@angular/core';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { IonContent, IonHeader, IonicModule, IonTitle, IonToolbar } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ListaAlumnosComponent, IonicModule]
})
export class HomePage {

  constructor() {}
  
}
