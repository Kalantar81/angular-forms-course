import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.less']
})
export class FormCreationComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    /** поля, которые появляються в определенной форме
     * в HTML название поля появляется под дерективой formControlName
     */
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null)
    });
  }

  public submit(): void {
    console.log('form: ', this.form);

    const formData = {...this.form.value};
    console.log('Form Data: ', formData);
    /** Очищает form */
    this.form.reset();
  }

}
