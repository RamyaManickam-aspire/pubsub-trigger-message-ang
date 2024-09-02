// src/app/pubsub.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PubsubService {
  private apiUrl =
    'https://pubsub-trigger-message-node-o7yeawi66q-uc.a.run.app/publish'; // Replace with your Node.js API URL

  constructor(private http: HttpClient) {}

  publishMessage(message: string): Observable<any> {
    return this.http.post(this.apiUrl, { message });
  }
}
