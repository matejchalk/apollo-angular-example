import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./pages/recipes/recipes.module').then(m => m.RecipesModule),
  },
  {
    path: 'recipe/:id',
    loadChildren: () =>
      import('./pages/recipe-detail/recipe-detail.module').then(
        m => m.RecipeDetailModule
      ),
  },
  {
    path: 'create-recipe',
    loadChildren: () =>
      import('./pages/create-recipe/create-recipe.module').then(
        m => m.CreateRecipeModule
      ),
  },
  {
    path: 'update-recipe/:id',
    loadChildren: () =>
      import('./pages/update-recipe/update-recipe.module').then(
        m => m.UpdateRecipeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
