import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NzAvatarModule,
  NzButtonModule,
  NzCardModule,
  NzPageHeaderModule,
  NzTagModule,
} from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { IconsProviderModule } from '../../icons-provider.module';
import { RecipeDetailComponent } from './recipe-detail.component';

@NgModule({
  declarations: [RecipeDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecipeDetailComponent }]),
    IconsProviderModule,
    NzPageHeaderModule,
    NzCardModule,
    NzSpaceModule,
    NzAvatarModule,
    NzButtonModule,
    NzTagModule,
  ],
  exports: [RecipeDetailComponent],
})
export class RecipeDetailModule {}
