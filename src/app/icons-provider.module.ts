import { NgModule } from '@angular/core';
import {
  ArrowLeftOutline,
  DashboardOutline,
  DeleteOutline,
  EditOutline,
  EyeOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PictureOutline,
  PlusOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  EyeOutline,
  EditOutline,
  DeleteOutline,
  PictureOutline,
  PlusOutline,
  ArrowLeftOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {}
