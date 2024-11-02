import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { CamaraComponent } from '../camara/camara.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ListaAlumnosComponent, CamaraComponent]
  
})
export class HomePage {
  constructor() {}
}
