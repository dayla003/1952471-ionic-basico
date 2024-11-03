import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp,IonicModule, ListaAlumnosComponent],
})
export class AppComponent {
  constructor() {}

}