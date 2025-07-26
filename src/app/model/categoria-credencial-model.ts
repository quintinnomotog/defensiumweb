export interface CategoriaCredencialModel {
	code: number;
	codePublic: string;
	descricao: string;
	nomeIcone?: string;
	corIcone?: string;
	corFundo?: string;
	dataCriacao?: Date;
	dataEdicao?: Date;
	dataDelecao?: Date;
}