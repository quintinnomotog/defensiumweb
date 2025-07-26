import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private router = inject(Router);

  public redirecionarTelaCredencial() {
    this.router.navigate(['/credencial']);
  }

  public redirecionarTelaPrincipal() {
    this.router.navigate(['/principal']);
  }

  public redirecionarTelaConfiguracao() {
    this.router.navigate(['/configuracao']);
  }

}
