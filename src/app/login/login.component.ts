import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  value = "";
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl()
    });
  }
}