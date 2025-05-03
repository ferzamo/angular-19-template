import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly store = inject(AppStore);
  public showMenu = false;
}
