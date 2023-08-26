import { Component } from '@angular/core';
import { HomeComponent} from './home/home.component'
@Component({
  selector: 'app-root',
  /* templateUrl: './app.component.html', */
  template: ` 
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.ico" alt="logo" aria-hidden="true" width="32px">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
