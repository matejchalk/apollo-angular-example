import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd';
import { RecipeFormModule } from './../../components/recipe-form/recipe-form.module';
import { CreateRecipeComponent } from './create-recipe.component';

@NgModule({
  declarations: [CreateRecipeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CreateRecipeComponent }]),
    RecipeFormModule,
    NzPageHeaderModule,
  ],
  exports: [CreateRecipeComponent],
})
export class CreateRecipeModule {}
