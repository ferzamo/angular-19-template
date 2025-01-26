import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private set aa(a: string) {}
  public title: string = 'angular-19-template';
  private heha: string = 'as';

  constructor() {}

  public b(): boolean {
    return true;
  }

  private a(): boolean {
    return true;
  }
}

export interface IFoo {
  set bar(value: number);
  get bar(): number;
}
