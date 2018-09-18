import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultsComponent } from './pages/results/results.component';
import { SimulatorComponent } from './pages/simulator/simulator.component';
import { FinancialSimulatorRoutingModule } from './financial-simulator.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FinancialSimulatorRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    LandingPageComponent,
    SimulatorComponent,
    ResultsComponent
  ],
  providers: []
})

export class FinancialSimulatorModule {}
