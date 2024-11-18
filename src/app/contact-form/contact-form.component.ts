import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
    body: '',
  };

  get alertColor() {
    return `text-${this.color}-400`;
  }
  
  hideAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
  
  async submitEmail(contactForm: NgForm) {
    this.onSubmit = true;
    // -- set formData values
    let formData: FormData = new FormData();
    formData.append('name', this.contactFormValues.name);
    formData.append('email', this.contactFormValues.email);
    formData.append('body', this.contactFormValues.body);
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
      this.alertMessage = 'Something went wrong, try again later!';
      this.color = 'red';
    }
    // -- reset submit and hide alert
    this.onSubmit = false;
    this.showAlert = true;
    this.hideAlert();
  }
}