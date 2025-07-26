import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PessoaModel } from '../../model/pessoa-model';
import { PessoaService } from '../../service/pessoa-service';
import { CredencialModel } from './../../model/credencial-model';
import { CredencialService } from './../../service/credencial-service';

@Component({
  selector: 'app-principal',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './principal.html',
  styleUrl: './principal.scss',
})
export class Principal implements OnInit {
  public credencialFormGroup!: FormGroup;

  public isApresentarModal: boolean = false;

  public isApresentarDropdown: boolean = false;

  public pessoaArray: Array<any> = [];

  public pessoaPesquisarArray: Array<any> = [];

  public termoPesquisa: string = '';

  private readonly pessoaService = inject(PessoaService);

  private readonly credencialService = inject(CredencialService);

  constructor() {}

  ngOnInit() {
    this.configurarFormulario();
    this.pessoaPesquisarArray = [...this.pessoaArray];
    this.carregarDadosPessoa();
  }

  public apresentarModal() {
    this.isApresentarModal = true;
  }

  public fecharModal() {
    this.isApresentarModal = false;
    this.credencialFormGroup.reset();
    this.termoPesquisa = '';
    this.pessoaPesquisarArray = [...this.pessoaArray];
  }

  private configurarFormulario() {
    this.credencialFormGroup = new FormGroup({
      pessoaCodigo: new FormControl('', [Validators.required]),
      pessoaNome: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      identificador: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      link: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      observacao: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
    });
  }

  public cadastrarCredencial() {
    const credencialModel: CredencialModel = this.credencialFormGroup.value;
    debugger;
    this.credencialService.create(credencialModel).subscribe({
      next: (credencialModel: CredencialModel) => {
        console.log("[PessoaService -> cadastrarCredencial()] Credencial cadastrada com sucesso!", credencialModel);
        this.fecharModal();
      },
      error: (error: any) => {
        console.error('[PessoaService -> cadastrarCredencial()] Falha ao cadastrar credencial!', error);
      },
    });
    // this.credencialFormGroup.reset();
  }

  public abrirDropdown() {
    this.credencialFormGroup.reset();
    this.termoPesquisa = '';
    this.pessoaPesquisarArray = [...this.pessoaArray];
    if (this.isApresentarDropdown) {
      this.pessoaPesquisarArray = [...this.pessoaArray];
      this.isApresentarDropdown = false;
    } else {
      this.isApresentarDropdown = true;
    }
  }

  public carregarDadosPessoa() {
    this.pessoaService.findAll().subscribe({
      next: (pessoaArray: PessoaModel[]) => {
        this.pessoaArray = pessoaArray.filter((pessoa) => pessoa.code !== 1);
        this.pessoaPesquisarArray = [...this.pessoaArray];
      },
      error: (error: any) => {
        console.error(
          '[PessoaService -> carregarDadosPessoa()] Falha ao carregar dados!',
          error
        );
      },
    });
  }

  public pesquisarPessoa() {
    const termo = this.termoPesquisa.toLowerCase();
    if (termo.length >= 2) {
      this.pessoaPesquisarArray = this.pessoaArray.filter((pessoa) =>
        pessoa.nome.toLowerCase().includes(termo)
      );
    } else {
      this.credencialFormGroup.reset();
      this.termoPesquisa = '';
      this.pessoaPesquisarArray = [...this.pessoaArray];
    }
  }

  public selecionarPessoa(pessoa: any) {
    this.credencialFormGroup.patchValue({
      pessoaCodigo: pessoa.code,
      pessoaNome: pessoa.nome,
    });
    this.isApresentarDropdown = false;
  }
}
