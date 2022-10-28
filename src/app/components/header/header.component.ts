import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() { }

  cerrarSesion() {
    this.alertCtrl.create({
      header: "Cerrar Sesión",
      message: "¿Esta Seguro de Cerrar Sesión?",
      buttons: [
        {
          text: "Sí",
          handler: () => {
            localStorage.clear();
            //location.href = '/login';
            this.router.navigate(['/login']);
            this.router.dispose();
          }
        },
        { text: "No" }
      ]
    }).then(alertEl => alertEl.present());
  }
}
