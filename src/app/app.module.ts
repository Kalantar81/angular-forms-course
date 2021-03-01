import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/container/body/body.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/container/header/header.component';
import { FormCreationComponent } from './components/form-creation/form-creation.component';
import { ValidatorsComponent } from './components/validators/validators.component';
import { FormGroupsComponent } from './components/form-groups/form-groups.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { AsyncValidatorComponent } from './components/async-validator/async-validator.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { ChildComponent } from './components/ng-model/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    BodyComponent,
    FormCreationComponent,
    ValidatorsComponent,
    FormGroupsComponent,
    CustomValidatorComponent,
    AsyncValidatorComponent,
    NgModelComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
