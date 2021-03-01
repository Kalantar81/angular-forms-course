import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-groups',
  templateUrl: './form-groups.component.html',
  styleUrls: ['./form-groups.component.less']
})
export class FormGroupsComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
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
      ),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  public submit(): void {
    if (this.form.valid) {
      console.log('form: ', this.form);

      const formData = {...this.form.value};
      console.log('Form Data: ', formData);
    }
  }

  public setCapital(): void {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kyev',
      by: 'Misk'
    };

    const cityKey = this.form.get('address').get('country').value;
    const cityName = cityMap[cityKey];

    console.log(cityName);

    /** апдейтит значение формы */
    this.form.patchValue({
      address: {city: cityName}
    });
  }

  public addSkill(): void {
    const control = new FormControl('', Validators.required);

    (this.form.get('skills') as FormArray).push(control);

  }

}
