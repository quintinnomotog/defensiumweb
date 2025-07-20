import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [
    CommonModule
  ],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal {
  public isApresentarModal: boolean = false;

  public apresentarModal() {
    this.isApresentarModal = true;
  }

  public fecharModal() {
    this.isApresentarModal = false;
  }

}
