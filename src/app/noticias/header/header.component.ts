import { Component } from '@angular/core';

@Component({
  selector: 'noticias-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class NoticiasHeaderComponent {
  usuario = { nome: "Nilton Cesar" }
}
