import { Component } from '@angular/core';
import { RecipeFragment } from '../../graphql/generated';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  readonly recipes: RecipeFragment[] = [
    {
      id: 'foo',
      title: 'Foo',
      imageUrl: 'https://picsum.photos/800/450',
      estimatedTime: 120,
      serves: 4,
    },
    {
      id: 'bar',
      title: 'Bar',
      imageUrl: 'https://picsum.photos/600/300',
      estimatedTime: 45,
    },
    { id: 'baz', title: 'Baz' },
  ];
}
