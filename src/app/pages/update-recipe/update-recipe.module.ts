import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NzMessageModule,
  NzPageHeaderModule,
  NzSpinModule,
} from 'ng-zorro-antd';
import { RecipeFormModule } from '../../components/recipe-form/recipe-form.module';
import { LetDirectiveModule } from '../../directives/let/let-directive.module';
import { UpdateRecipeComponent } from './update-recipe.component';

@NgModule({
  declarations: [UpdateRecipeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UpdateRecipeComponent }]),
    RecipeFormModule,
    LetDirectiveModule,
    NzPageHeaderModule,
    NzMessageModule,
    NzSpinModule,
  ],
  exports: [UpdateRecipeComponent],
})
export class UpdateRecipeModule {}
