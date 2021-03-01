import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncValidatorComponent } from './components/async-validator/async-validator.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { FormCreationComponent } from './components/form-creation/form-creation.component';
import { FormGroupsComponent } from './components/form-groups/form-groups.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { ValidatorsComponent } from './components/validators/validators.component';

const routes: Routes = [
  {path: '', redirectTo: 'formCreation', pathMatch: 'full'}, // '' will render to home component
  {path: 'formCreation', component: FormCreationComponent},
  {path: 'validators', component: ValidatorsComponent},
  {path: 'formGroups', component: FormGroupsComponent},
  {path: 'customValidator', component: CustomValidatorComponent},
  {path: 'asyncValidator', component: AsyncValidatorComponent},
  {path: 'ngModel', component: NgModelComponent},

  {path: '**', component: FormCreationComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
