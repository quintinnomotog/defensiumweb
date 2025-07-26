import { CategoriaCredencialModel } from './categoria-credencial-model';
import { PessoaModel } from './pessoa-model';

export interface CredencialModel {
  code?: number;
  codePublic?: string;
  categoriaCredencial: CategoriaCredencialModel;
  pessoa: PessoaModel;
  descricao: string;
  identificador: string;
  senha: string;
  link?: string;
  observacao?: string;
  isAtivo?: boolean;
}
