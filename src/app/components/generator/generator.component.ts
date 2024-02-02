import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [
    CdkTextareaAutosize,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {
  firstFormGroup = this._formBuilder.group({
    //  firstCtrl: ['', Validators.required],
    projectNameCtrl: ['', Validators.required],
    projectDescCtrl: ['', Validators.required],
    projectPatternCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  lastFormGroup = this._formBuilder.group({
    lastCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }
}
