import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keyup)': 'onDocumentKeyup($event)'
  }
})
export class AppComponent {
  title = 'animation-project';
  showLoadingMessage = false;
  keyPressed = false;

  onDocumentKeyup(event) {
    if (event.keyCode === 122) {
      event.preventDefault();
      this.keyPressed = true;
      setTimeout(() => {
        this.showLoadingMessage = true;
      }, 5000)
    }
  }
}

