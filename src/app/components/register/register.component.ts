import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
     registerForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        role: new FormControl(''),
    });

    onSubmit() {
      console.log(this.registerForm.value);
      
    }
}
