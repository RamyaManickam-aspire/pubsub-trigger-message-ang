import { Component } from '@angular/core';
import { PubsubService } from './pubsub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-pub-sub';
  message = '';

  constructor(private pubsubService: PubsubService) {}

  sendMessage() {
    this.pubsubService.publishMessage(this.message).subscribe(
      (response) => {
        console.log('Message published:', response);
      },
      (error) => {
        console.error('Error publishing message:', error);
      }
    );
  }
}
