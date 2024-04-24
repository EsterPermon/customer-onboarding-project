import { Routes } from '@angular/router';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { NextStepsComponent } from './pages/next-steps/next-steps.component';

export const routes: Routes = [
  { path: 'strategy', component: StrategyComponent },
  { path: 'next-steps', component: NextStepsComponent },
  { path: '**', redirectTo: 'next-steps' },
];
