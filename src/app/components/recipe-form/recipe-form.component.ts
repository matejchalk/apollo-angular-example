import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateRecipeMutationVariables } from '../../graphql/generated';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
})
export class RecipeFormComponent {
  @Output() save = new EventEmitter<CreateRecipeMutationVariables>();

  readonly recipeForm = this.fb.group({
    title: ['', Validators.required],
    imageUrl: [''],
    estimatedTime: [null, Validators.min(0)],
    serves: [null, Validators.min(0)],
    description: [''],
  });
  readonly timeFormatter = (value: number) => (!value ? '' : `${value} mins`);
  readonly timeParser = (value: string) => value.replace(' mins', '');

  constructor(private readonly fb: FormBuilder) {}

  handleSubmit() {
    if (this.recipeForm.valid) {
      this.save.emit(this.recipeForm.value);
    }
  }
}
