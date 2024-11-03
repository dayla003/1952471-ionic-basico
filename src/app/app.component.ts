import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonicModule, ListaAlumnosComponent, CommonModule],
})
export class AppComponent {
  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkPlatform();
    });
  }

  checkPlatform() {
    if (this.platform.is('android')) {
      console.log('La app se está ejecutando en Android');
    } else if (this.platform.is('ios')) {
      console.log('La app se está ejecutando en iOS');
    } else if (this.platform.is('desktop')) {
      console.log('La app se está ejecutando en un navegador web');
    }
  }
}