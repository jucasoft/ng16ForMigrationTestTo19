import {CoinStoreState} from '@root-store/coin-store';
import {UserStoreState} from '@root-store/user-store';

export interface State {
coin:CoinStoreState.State;
user:UserStoreState.State;
}
