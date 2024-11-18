import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  sendEmail(formData: FormData): Promise<Response> {
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
  }
}
