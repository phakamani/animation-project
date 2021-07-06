import { MockHttpService } from './mock-http.service';
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
  response: any;
  error: any;

  constructor(
    private mockHttpService: MockHttpService
  ) {}

  onDocumentKeyup(event) {
    if (event.keyCode === 122) {
      event.preventDefault();
      this.keyPressed = true;
      setTimeout(() => {
        this.showLoadingMessage = true;
        this.mockHttpService.getMoreContent().subscribe(
          response => {
            this.response = response;
            this.hideLoadingMessage();
          },
          error => {
            this.error = error;
            this.hideLoadingMessage();
          }
        )
      }, 5000)
    }
  }

  hideLoadingMessage() {
    setTimeout(() => {
      this.showLoadingMessage = false;
    }, 2000)
  }
}

