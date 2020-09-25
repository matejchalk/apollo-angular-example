import { Component } from '@angular/core';
import { CreateRecipeMutationVariables } from '../../graphql/generated';

@Component({
  selector: 'app-create-recipe',
  template: `
    <nz-page-header>
      <nz-page-header-title>New recipe</nz-page-header-title>
      <nz-page-header-content>
        <app-recipe-form (save)="handleSave($event)"></app-recipe-form>
      </nz-page-header-content>
    </nz-page-header>
  `,
})
export class CreateRecipeComponent {
  handleSave(recipe: CreateRecipeMutationVariables): void {
    console.log(recipe);
  }
}