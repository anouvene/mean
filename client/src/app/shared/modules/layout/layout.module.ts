import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  FlexLayoutModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...MODULES],
  declarations: []
})
export class LayoutModule { }
