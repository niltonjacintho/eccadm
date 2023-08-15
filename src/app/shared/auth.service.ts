import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private route: Router) { }

  async login(email: string, senha: string): Promise<boolean> {
    var res = false;
    await this.fireauth.signInWithEmailAndPassword(email, senha).then((a) => {
      localStorage.setItem('token', 'true');
      res = true;
    }, err => {
      res = false;
      console.log('errorrrrrrrrr', err)
    });
    console.log('retorno final ', res)
    return res;

  }
}
