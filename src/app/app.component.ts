import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStore } from './core/store/app.store';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { PasswordModule } from 'primeng/password';
import { usePreset } from '@primeng/themes';
import { IndigoPreset } from './configs/primeng/presets/indigo';
import { ZincPreset } from './configs/primeng/presets/zinc';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    PasswordModule,
  ],
  providers: [AppStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly store = inject(AppStore);

  public changeThemeIndigo(): void {
    usePreset(IndigoPreset);
  }

  public changeThemeZinc(): void {
    usePreset(ZincPreset);
  }

  public toggleDarkMode(): void {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
