import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TextareaModule } from 'primeng/textarea';
import { usePreset } from '@primeng/themes';
import { IndigoPreset } from '../../configs/primeng/presets/indigo';
import { ZincPreset } from '../../configs/primeng/presets/zinc';
import { AppStore } from '../../core/store/app.store';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, InputTextModule, DatePickerModule, TextareaModule, PasswordModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public readonly store = inject(AppStore);

  public changeThemeIndigo(): void {
    usePreset(IndigoPreset);
  }

  public changeThemeZinc(): void {
    usePreset(ZincPreset);
  }

  public toggleDarkMode(): void {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
}
