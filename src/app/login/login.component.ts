import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  loginForm: FormGroup;
  success = false;

  constructor(
    private fb: FormBuilder,
    private elem: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formBuilder();
  }

  ngOnChanges() {
  }

  sign(event: any) {
    console.log(this.loginForm.value);
    this.success = !this.success;
  }

  formBuilder() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
