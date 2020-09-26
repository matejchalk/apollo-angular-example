import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import {
  DeleteRecipeGQL,
  RecipeFragment,
  RecipesDocument,
  RecipesGQL,
  RecipesQuery,
} from '../../graphql/generated';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  private readonly recipesChanges$ = this.recipesGQL.watch(undefined, {
    useInitialLoading: true,
  }).valueChanges;
  readonly recipes$ = this.recipesChanges$.pipe(
    map(({ data }) => data?.recipes)
  );
  readonly loading$ = this.recipesChanges$.pipe(map(({ loading }) => loading));

  constructor(
    private readonly recipesGQL: RecipesGQL,
    private readonly deleteRecipeGQL: DeleteRecipeGQL,
    private readonly message: NzMessageService
  ) {}

  handleDelete({ id, title }: RecipeFragment): void {
    this.deleteRecipeGQL
      .mutate(
        { id },
        {
          update: store => {
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
          },
        }
      )
      .subscribe(() => {
        this.message.success(`Deleted "${title}"`);
      });
  }
}
