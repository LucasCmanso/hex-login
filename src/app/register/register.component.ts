import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elem: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  ngOnChanges() {

  }

  register(event: any) {
    console.log(this.registerForm.value);
    setTimeout(() => {this.router.navigate(['/first-component'])}, 3000);
  }

  formBuilder() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]
    })
  }

}
