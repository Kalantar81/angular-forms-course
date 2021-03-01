import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.less']
})
export class ValidatorsComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      /** вторым параметром всегда передаются validators
       * есть стандартные встроенные валидаторыб которые передаются в array если их несколько
       */
      email: new FormControl(
        '',
        [
          Validators.email,
          Validators.required
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
        )
    });
  }

  public submit(): void {
    if (this.form.valid) {
      console.log('form: ', this.form);

      const formData = {...this.form.value};
      console.log('Form Data: ', formData);
    }
  }

}
