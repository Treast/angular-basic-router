import { Routes } from '@angular/router';

import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';

export const routes : Routes = [
  {
    path: 'one',
    component: ScreenOneComponent
  },
  {
    path: 'two',
    component: ScreenTwoComponent
  },
  {
    path: 'three',
    component: ScreenThreeComponent
  },
  {
    path: '**',
    redirectTo: 'one'
  }
];