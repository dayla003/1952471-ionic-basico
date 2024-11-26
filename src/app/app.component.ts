import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CommonModule } from '@angular/common';
import { SplashScreen, SplashScreenPlugin } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonicModule, ListaAlumnosComponent, CommonModule],
})
export class AppComponent {
 constructor() {
  this.mostrarSplashScreen();
 }

async mostrarSplashScreen () {
  //await SplashScreen.hide();
  await SplashScreen.show({
    autoHide: false,
    showDuration: 2000
  })
 }

}