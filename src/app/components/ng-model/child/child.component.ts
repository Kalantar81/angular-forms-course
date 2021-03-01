import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgModelComponent } from '../ng-model.component';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChildComponent),
  multi: true
};

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  providers: [VALUE_ACCESSOR]
})
export class ChildComponent implements ControlValueAccessor {

  state = 'off';

  private onChange = (value: any) => {};

  public setState(state: string): void  {
    this.state = state;
    this.onChange(this.state);
  }

  /** следит за изменениями модели */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** следит за изменениями модели в мобильных устройствах */
  registerOnTouched(fn: any): void {}

  /** блокирует модель */
  setDisabledState(isDisabled: boolean): void {}

  /** принимает значения от ng-model и записывает ее в локальную переменную state */
  writeValue(state: string): void {
    this.state = state;
  }

}
