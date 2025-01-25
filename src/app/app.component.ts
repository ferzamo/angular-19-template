import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-19-template';

  // Método no utilizado
  unusedMethod(): void {
    console.log('This method is not used anywhere');
  }

  // Propiedad no utilizada
  unusedProperty = 'This is not used';

  // Método parcialmente testeado (supongamos que las pruebas no cubren todos los casos)
  calculateSum(a: number, b: number): number {
    if (a < 0 || b < 0) {
      console.warn('Negative numbers are not handled properly');
    }
    return a + b;
  }

  // Método con lógica no testeada
  fetchData(): void {
    try {
      throw new Error('This error is not tested');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
}
