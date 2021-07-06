import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './components/browser/browser/browser.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path : 'main', component : MainComponent},
  {path : 'browser', component : BrowserComponent},
  {path : '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
