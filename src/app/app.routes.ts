import { Routes } from '@angular/router';
import { Credencial } from './page/credencial/credencial';
import { Principal } from './page/principal/principal';
import { Configuracao } from './page/configuracao/configuracao';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "principal",
    pathMatch: "full"
  },
  {
    path: 'principal',
    component: Principal,
  },
  {
    path: 'credencial',
    component: Credencial,
  },
  {
    path: 'configuracao',
    component: Configuracao,
  },
];
