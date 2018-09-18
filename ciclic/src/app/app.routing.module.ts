import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'simulator',
    loadChildren: 'app/features/financial-simulator/financial-simulator.module#FinancialSimulatorModule'
  },
  {
    path: '',
    redirectTo: 'simulator',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'simulator' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
