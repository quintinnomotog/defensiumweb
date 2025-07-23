import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';

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

	public pessoaArray: Array<any> = [
		{ codigo: 1, nome: 'Google' },
		{ codigo: 2, nome: 'Amazon' },
		{ codigo: 3, nome: 'Apple' },
		{ codigo: 4, nome: 'Meta (Facebook)' },
		{ codigo: 5, nome: 'Microsoft' },
		{ codigo: 6, nome: 'Netflix' },
		{ codigo: 7, nome: 'Tesla' },
		{ codigo: 8, nome: 'Nvidia' },
		{ codigo: 9, nome: 'OpenAI' }
	];

	public pessoaPesquisarArray: Array<any> = [];

	public termoPesquisa: string = '';

	constructor() { }

	ngOnInit() {
		this.configurarFormulario();
		this.pessoaPesquisarArray = [...this.pessoaArray];
	}

	public apresentarModal() {
		this.isApresentarModal = true;
	}

	public fecharModal() {
		this.isApresentarModal = false;
		this.credencialFormGroup.reset();
		this.termoPesquisa = "";
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
		console.table(this.credencialFormGroup.value);
	}

	public abrirDropdown() {
		this.credencialFormGroup.reset();
		this.termoPesquisa = "";
		this.pessoaPesquisarArray = [...this.pessoaArray];
		if (this.isApresentarDropdown) {
			this.pessoaPesquisarArray = [...this.pessoaArray];
			this.isApresentarDropdown = false;
		} else {
			this.isApresentarDropdown = true;
		}
	}

	public carregarDadosPessoa(): any[] {
		return this.pessoaArray;
	}

	public pesquisarPessoa() {
		const termo = this.termoPesquisa.toLowerCase();
		if (termo.length >= 2) {
			this.pessoaPesquisarArray = this.pessoaArray.filter((pessoa) =>
				pessoa.nome.toLowerCase().includes(termo)
			);
		} else {
			this.credencialFormGroup.reset();
			this.termoPesquisa = "";
			this.pessoaPesquisarArray = [...this.pessoaArray];
		}
	}

	public selecionarPessoa(pessoa: any) {
		this.credencialFormGroup.patchValue({
			pessoaCodigo: pessoa.codigo,
			pessoaNome: pessoa.nome,
		});
		this.isApresentarDropdown = false;
	}

}
