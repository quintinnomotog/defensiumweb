import { CategoriaCredencialModel } from './categoria-credencial-model';
import { PessoaModel } from './pessoa-model';

export interface CredencialModel {
  code: number;
  codePublic: string;
  categoriaCredencialModel: CategoriaCredencialModel;
  pessoaModel: PessoaModel;
  descricao: string;
  identificador: string;
  senha: string;
  link: string;
  observacao: string;
  isAtivo: boolean;
}
