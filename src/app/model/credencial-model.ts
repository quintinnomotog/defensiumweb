import { PessoaModel } from './pessoa-model';

export interface CredencialModel {
  code: number;
  codePublic: string;
  PessoaModel: PessoaModel;
  descricao: string;
  identificador: string;
  senha: string;
  link: string;
  observacao: string;
  isAtivo: boolean;
}
