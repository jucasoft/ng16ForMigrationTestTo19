import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UserStoreEffects} from './user.effects';
import {featureReducer} from './user.reducer';
import {State} from './user.state';
import {Names} from './user.names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<State>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([UserStoreEffects]),
	],
	declarations: [],
	providers: [UserStoreEffects,
		{
			provide: INJECTION_TOKEN,
			useFactory: (): ActionReducer<State> => featureReducer
		}]
})
export class UserStoreModule {
}
