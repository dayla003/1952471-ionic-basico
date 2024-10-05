import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonList, IonLabel, IonItem, IonicModule, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor]
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: string[] = [
    "Dayla Marely",
    "Hector Camacho",
    "Marcela Elena",
    "Mariana Andrea",
    "Brenda Alicia"
  ];

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  async showDeleteActionSheet(alumno: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteAlumno(alumno);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
        }
      ]
    });
    await actionSheet.present();
  }

  addToFavorites(alumno: string) {
    console.log(`${alumno} agregado a favoritos`);
  }

  deleteAlumno(alumno: string) {
    this.alumnos = this.alumnos.filter(a => a !== alumno);
    console.log(`${alumno} eliminado`);
  }
}
