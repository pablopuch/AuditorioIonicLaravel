import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: Storage) { }

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
     this.authService.register(user).subscribe(
       (res) => {
         console.log(res);
     if (res.user) {

            //  this.storage.set("token", res.access_token);
           }
       this.router.navigateByUrl('home');
     },
     (error)=>{
       console.log(error);
     });
  }

}


