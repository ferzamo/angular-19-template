import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStore } from './core/store/app.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [AppStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly store = inject(AppStore);
}
