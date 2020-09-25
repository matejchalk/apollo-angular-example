import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzPageHeaderModule } from 'ng-zorro-antd';
import { RecipeFormModule } from './../../components/recipe-form/recipe-form.module';
import { UpdateRecipeComponent } from './update-recipe.component';

@NgModule({
  declarations: [UpdateRecipeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UpdateRecipeComponent }]),
    RecipeFormModule,
    NzPageHeaderModule,
  ],
  exports: [UpdateRecipeComponent],
})
export class UpdateRecipeModule {}
