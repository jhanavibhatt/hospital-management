import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form !: FormGroup;
  email: any = '';
  password: any = '';

  constructor(
    private authApi : AuthService,
    private fb : FormBuilder)
  {
      this.form = this.fb.group({
      email : [this.email, [Validators.required, Validators.email]],
      password : [this.password,[Validators.required]]
    })
  }
  ngOnInit(): void {
  }

  login() {
    this.authApi.login(this.form.value.email, this.form.value.password);
  }

}
