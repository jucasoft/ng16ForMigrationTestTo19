import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'user', loadChildren: () => import('./main/views/user/user.module').then(m => m.UserModule)}, {path: 'coin', loadChildren: () => import('./main/views/coin/coin.module').then(m => m.CoinModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
