import { Component } from '@angular/core';
import { RecipeFragment } from './../../graphql/generated';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent {
  readonly recipe: RecipeFragment = {
    id: 'foo',
    title: 'Foo',
    imageUrl: 'https://picsum.photos/800/450',
    estimatedTime: 120,
    serves: 4,
    description: 'Lorem ipsum...',
  };
}
