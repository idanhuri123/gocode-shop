import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'gocode-shop2';
  show: boolean = true;

  showNHide() {
    this.title = this.title?'':'gocode-shop';
  }
}
