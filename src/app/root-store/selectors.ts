import {CoinStoreSelectors} from '@root-store/coin-store';
import {UserStoreSelectors} from '@root-store/user-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn: any) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(
CoinStoreSelectors.selectError,
UserStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(
CoinStoreSelectors.selectIsLoading,
UserStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

