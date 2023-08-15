import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  value = "";
  usuario = { email: '', senha: '' }
  formGroup!: FormGroup;

  constructor(private authService: AuthService, private route: Router) { { } }


  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl()
    });
  }

  async login() {
    var acesso = await  this.authService.login(this.usuario.email, this.usuario.senha);
    console.log('retorno do acesso',acesso);
    if (acesso) {
      this.route.navigate(['/noticias']);
    }
  }
  
}