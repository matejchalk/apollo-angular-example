import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import {
  CreateRecipeGQL,
  CreateRecipeMutationVariables,
  RecipesDocument,
  RecipesQuery,
} from '../../graphql/generated';

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
  constructor(
    private readonly createRecipeGQL: CreateRecipeGQL,
    private readonly router: Router,
    private readonly message: NzMessageService
  ) {}

  handleSave(variables: CreateRecipeMutationVariables): void {
    this.createRecipeGQL
      .mutate(variables, {
        update: (store, result) => {
          if (result.data) {
            const {
              data: { createRecipe: newRecipe },
            } = result;
            try {
              const data = store.readQuery<RecipesQuery>({
                query: RecipesDocument,
              });
              if (data) {
                store.writeQuery<RecipesQuery>({
                  query: RecipesDocument,
                  data: { recipes: [...data.recipes, newRecipe] },
                });
              }
            } catch (err) {
              // https://github.com/apollographql/apollo-feature-requests/issues/1
            }
          }
        },
      })
      .subscribe(result => {
        this.message.success(`Created "${result.data?.createRecipe.title}"`);
        this.router.navigate(['/recipe', result.data?.createRecipe.id]);
      });
  }
}
