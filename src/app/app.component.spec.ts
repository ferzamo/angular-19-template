import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppStore } from './core/store/app.store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [AppStore],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    app.changeThemeIndigo();
    app.changeThemeZinc();
    app.toggleDarkMode();
    expect(app).toBeTruthy();
  });
});
