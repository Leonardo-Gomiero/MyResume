import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { AcademicBackgroundComponent } from './pages/academic-background/academic-background.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'languages',
    component: LanguagesComponent
  },
  {
    path: 'academic_background',
    component: AcademicBackgroundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
