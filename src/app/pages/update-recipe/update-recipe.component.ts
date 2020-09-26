import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import {
  CreateRecipeMutationVariables,
  RecipeGQL,
  UpdateRecipeGQL,
} from '../../graphql/generated';

@Component({
  selector: 'app-update-recipe',
  template: `
    <nz-page-header nzBackIcon *appLet="recipe$ | async as recipe">
      <nz-page-header-title>Recipe</nz-page-header-title>
      <nz-page-header-subtitle>{{ recipe?.title }}</nz-page-header-subtitle>
      <nz-page-header-content>
        <app-recipe-form
          *ngIf="recipe; else loading"
          [initialValue]="recipe"
          (save)="handleSave($event)"
        ></app-recipe-form>
        <ng-template #loading>
          <nz-spin nzSize="large"></nz-spin>
        </ng-template>
      </nz-page-header-content>
    </nz-page-header>
  `,
})
export class UpdateRecipeComponent {
  private readonly id = this.route.snapshot.params.id as string;
  readonly recipe$ = this.recipeGQL
    .watch({ id: this.id })
    .valueChanges.pipe(map(({ data }) => data?.recipe));

  constructor(
    private readonly recipeGQL: RecipeGQL,
    private readonly updateRecipeGQL: UpdateRecipeGQL,
    private readonly route: ActivatedRoute,
    private readonly message: NzMessageService
  ) {}

  handleSave(variables: CreateRecipeMutationVariables): void {
    this.updateRecipeGQL
      .mutate({ id: this.id, ...variables })
      .subscribe(result => {
        this.message.success(`Updated "${result.data?.updateRecipe.title}"`);
      });
  }
}
