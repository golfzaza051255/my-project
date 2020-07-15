import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css']
})
export class HomeRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService
  ) { }

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
      this.shaerdService.register(this.registerForm.value).subscribe(
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
