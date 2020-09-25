import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { RecipeFormComponent } from './recipe-form.component';

@NgModule({
  declarations: [RecipeFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputNumberModule,
    NzButtonModule,
  ],
  exports: [RecipeFormComponent],
})
export class RecipeFormModule {}
