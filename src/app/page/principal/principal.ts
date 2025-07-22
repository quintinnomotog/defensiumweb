import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal implements OnInit {

  public credencialFormGroup!: FormGroup;

  public isApresentarModal: boolean = false;

  constructor() { }

  ngOnInit() {
    this.configurarFormulario();
  }

  public apresentarModal() {
    this.isApresentarModal = true;
  }

  public fecharModal() {
    this.isApresentarModal = false;
  }

  private configurarFormulario() {
    this.credencialFormGroup = new FormGroup({
      pessoaCodigo: new FormControl("", [Validators.required]),
      descricao: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      identificador: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      senha: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      link: new FormControl("", [Validators.minLength(3), Validators.maxLength(255)]),
      observacao: new FormControl("", [Validators.minLength(3), Validators.maxLength(255)]),
    });
  }

  public cadastrarCredencial() {
    console.table(this.credencialFormGroup.value);
  }

}
