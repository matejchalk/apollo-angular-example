import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NzAvatarModule,
  NzButtonModule,
  NzCardModule,
  NzMessageModule,
  NzPageHeaderModule,
  NzSkeletonModule,
  NzTagModule,
} from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { IconsProviderModule } from '../../icons-provider.module';
import { LetDirectiveModule } from './../../directives/let/let-directive.module';
import { RecipeDetailComponent } from './recipe-detail.component';

@NgModule({
  declarations: [RecipeDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecipeDetailComponent }]),
    LetDirectiveModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzCardModule,
    NzSpaceModule,
    NzAvatarModule,
    NzButtonModule,
    NzTagModule,
    NzSkeletonModule,
    NzMessageModule,
  ],
  exports: [RecipeDetailComponent],
})
export class RecipeDetailModule {}
