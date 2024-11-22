import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from '../_services/mail.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  constructor(
    private mailService: MailService
  ) {}

  private color: string = '';
  showAlert: boolean = false;
  alertMessage: string = '';
  onSubmit: boolean = false;
  // iconLoad = faArrowRotateForward;
  contactFormValues = {
    name: '',
    email: '',
    message: '',
  };

  get alertColor() {
    return `text-${this.color}-400`;
  }
  
  hideAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 500);
  }
  
  async submitEmail(contactForm: NgForm) {
    this.onSubmit = true;
    // -- set formData values
    let formData: FormData = new FormData();
    formData.append('email', this.contactFormValues.email);
    formData.append('name', this.contactFormValues.name);
    formData.append('message', this.contactFormValues.message);
    // -- email customization
    formData.append('access_key', "040c35d5-6010-4d33-b65a-bf83fcac15d0");
    formData.append('subject', 'Email Support From Your Site');
    formData.append('from_name', 'Contact Notification');
  
    try {
      // -- send email
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error();
      }
      this.alertMessage = 'Email sent successfully!';
      this.color = 'green';
      contactForm.reset();
    } catch (err) {
      // handle error
      console.log('test')
      this.alertMessage = 'Something went wrong, try again later!';
      this.color = 'red';
    }
    // -- reset submit and hide alert
    this.onSubmit = false;
    this.showAlert = true;
    console.log("here")
    this.hideAlert();
  }
}