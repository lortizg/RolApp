import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'charas',
    loadChildren: () => import('./charas/charas.module').then(m => m.charasPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./char-select/char-select.module').then( m => m.CharSelectPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
