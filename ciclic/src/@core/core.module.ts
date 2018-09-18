import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FinancialSimulatorService } from './services/financial-simulator.service';

import { HeaderComponent } from './components/header/header.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    FinancialSimulatorService
  ],
})

export class CoreAppModule {}
