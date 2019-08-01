import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'settime', loadChildren: './settime/settime.module#SettimePageModule' },
  { path: 'viewmodal', loadChildren: './viewmodal/viewmodal.module#ViewmodalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
