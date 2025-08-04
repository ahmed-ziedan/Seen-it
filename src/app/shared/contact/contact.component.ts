import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(5000),
      ]),
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    // this.contactForm.reset();

    const formspreeEndpoint = 'https://formspree.io/f/mldlwvdj';

    this.http.post(formspreeEndpoint, this.contactForm.value).subscribe({
      next: (response: any) => {
        this.contactForm.reset();
      },
    });
  }
}
