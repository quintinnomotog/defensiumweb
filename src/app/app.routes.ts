import { Routes } from '@angular/router';
import { Principal } from './page/principal/principal';

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
];
