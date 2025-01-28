import { TestBed } from '@angular/core/testing';
import { AppStore } from '../app.store';
import { INITIAL_STATE } from '../constants/store.constants';

describe('AppStore', () => {
  it('should', () => {
    const store = TestBed.inject(AppStore);
    expect(store.title()).toHaveLength(INITIAL_STATE.title.length);
  });
});
