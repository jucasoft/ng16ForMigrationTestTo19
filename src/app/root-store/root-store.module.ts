import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '@root-store/root-reducer';
import {RouterStoreModule} from './router-store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { UserStoreModule } from '@root-store/user-store';
import { CoinStoreModule } from '@root-store/coin-store';

@NgModule({
  imports: [
    CommonModule,
    RouterStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    UserStoreModule,
    CoinStoreModule,
  ],
  declarations: []
})
export class RootStoreModule {
}
