import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyServiceService } from '../shares/service/my-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: MyServiceService) { }

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      user_name: ['', [Validators.required, Validators.minLength(4)]],
      user_lastname: ['', [Validators.required, Validators.minLength(4)]],
      user_address: ['', [Validators.required]],
      user_tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', Validators.required]
    });

  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.registerForm.invalid) {
      return false;

    } else { // case success
      console.log(this.registerForm.value);

      // register
      this.myService.register(this.registerForm.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  // reset
  resetForm() {
    this.registerForm.reset();
  }

  get form() { return this.registerForm.controls; }

}
