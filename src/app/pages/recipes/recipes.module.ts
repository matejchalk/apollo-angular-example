import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NzAvatarModule,
  NzButtonModule,
  NzPageHeaderModule,
  NzTableModule,
} from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { IconsProviderModule } from '../../icons-provider.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RecipesComponent }]),
    IconsProviderModule,
    NzTableModule,
    NzAvatarModule,
    NzButtonModule,
    NzSpaceModule,
    NzPageHeaderModule,
  ],
  declarations: [RecipesComponent],
  exports: [RecipesComponent],
})
export class RecipesModule {}
