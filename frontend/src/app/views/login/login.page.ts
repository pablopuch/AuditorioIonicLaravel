import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  loginForm: FormGroup;



  constructor(
    private authService : AuthService,
    public formBuilder: FormBuilder,
  ) {
   
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      project_id: '',
      type_schedules_id: '',
      rooms_id: '',
      date: '',
      hourRange: '',
      note: ''
    });
  }


  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(() => {

      this.loginForm.reset();



    });
  }



  }





  


