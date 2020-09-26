import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { map, switchMap } from 'rxjs/operators';
import {
  DeleteRecipeGQL,
  RecipeFragment,
  RecipeGQL,
  RecipesDocument,
  RecipesQuery,
} from '../../graphql/generated';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent {
  readonly id$ = this.route.params.pipe(map(({ id }) => id as string));
  private readonly recipeChanges$ = this.id$.pipe(
    switchMap(
      id =>
        this.recipeGQL.watch({ id }, { useInitialLoading: true }).valueChanges
    )
  );
  readonly recipe$ = this.recipeChanges$.pipe(map(({ data }) => data?.recipe));
  readonly loading$ = this.recipeChanges$.pipe(map(({ loading }) => loading));

  constructor(
    private readonly recipeGQL: RecipeGQL,
    private readonly deleteRecipeGQL: DeleteRecipeGQL,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly message: NzMessageService
  ) {}

  handleDelete({ id, title }: RecipeFragment): void {
    this.deleteRecipeGQL
      .mutate(
        { id },
        {
          update: store => {
            try {
              const data = store.readQuery<RecipesQuery>({
                query: RecipesDocument,
              });
              if (data) {
                store.writeQuery<RecipesQuery>({
                  query: RecipesDocument,
                  data: {
                    recipes: data.recipes.filter(recipe => recipe.id !== id),
                  },
                });
              }
            } catch (err) {
              // https://github.com/apollographql/apollo-feature-requests/issues/1
            }
          },
        }
      )
      .subscribe(() => {
        this.message.success(`Deleted "${title}"`);
        this.router.navigate(['/recipes']);
      });
  }
}
