import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { INITIAL_STATE } from './constants/store.constants';
import { computed } from '@angular/core';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_STATE),
  withComputed(({ title }) => ({
    titleLength: computed(() => title().length),
  })),
  withMethods((store) => ({
    updateTitle(title: string): void {
      patchState(store, { title });
    },
  })),
);
