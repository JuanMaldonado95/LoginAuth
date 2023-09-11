import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
      }
    )
  };

  get form() {
    return this.loginForm?.controls;
  };

  onSubmit() {
    this.submitted = true;

    if (this.loginForm?.invalid) {
      return;
    }

    alert(
      "SUCCESS!! :-)\n\n" + JSON.stringify(this.loginForm?.value, null, 4)
    );
  };

  onReset() {
    this.submitted = false;
    this.loginForm?.reset();
  };
}
