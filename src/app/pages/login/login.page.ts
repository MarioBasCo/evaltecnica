import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApijsonService } from 'src/app/services/apijson.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  items:any[]=[];

  constructor(
    private ser: ApijsonService,
    private router: Router,
    private toast: ToastController,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("[A-Za-zÁÉÍÓÚáéíóúñÑ ]+")]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });

    this.ser.getInfo().subscribe(resp=> {this.items= resp});
  }

  get usernameField() {
    return this.formLogin.get('username');
  }

  get emailField() {
    return this.formLogin.get('email');
  }

  auth(){
    const user = this.items.find(d => d.username == this.usernameField.value && d.email.toLowerCase() == this.emailField.value.toLowerCase() );
    if(!user){
      this.showMessage("Las credenciales de acceso son incorrectas", "danger");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }
  }

  async showMessage(message: string, color: string="success") {
    const toast = await this.toast.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }
}
