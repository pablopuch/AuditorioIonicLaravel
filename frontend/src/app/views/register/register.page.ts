import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user/user';
import { Storage } from '@ionic/storage';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: Storage, private alertController: AlertController) { }

  ngOnInit() {

  }
  

  register(form) {
    let user: User = {
      id: null,
      email: form.value.email,
      password: form.value.password,
      name: form.value.name,
      isAdmin: false
    };
    console.log(user);

    if (form.value.password == form.value.repeated) {
      this.authService.register(user).subscribe(
        (res) => {
          console.log(res);
          if (res.user) {

            //  this.storage.set("token", res.access_token);
          }
          this.router.navigateByUrl('home');
                form.reset();
        },
        (error) => {
          console.log(error);
        });

    }

    else {
      this.presentAlert("Las contraseñas no coinciden");
    }

  }


  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Could not register. Try again.',
      buttons: ['OK']
    });

    await alert.present();
  }


}





