import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.less']
})
export class NgModelComponent implements OnInit {

  appState = 'on';

  constructor() {}

  ngOnInit(): void {}

  public handleChange(): void {
    console.log(this.appState);
  }

}
