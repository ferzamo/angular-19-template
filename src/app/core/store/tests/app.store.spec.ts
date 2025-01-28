import { TestBed } from '@angular/core/testing';
import { AppStore } from '../app.store';
import { INITIAL_STATE } from '../constants/store.constants';

describe('AppStore', () => {
  it('should initialize with the initial state', () => {
    const store = TestBed.inject(AppStore);
    expect(store.title()).toHaveLength(INITIAL_STATE.title.length);
  });

  it('should compute the correct titleLength', () => {
    const store = TestBed.inject(AppStore);
    expect(store.titleLength()).toBe(INITIAL_STATE.title.length);

    store.updateTitle('New Title');
    expect(store.titleLength()).toBe('New Title'.length);
  });
});
