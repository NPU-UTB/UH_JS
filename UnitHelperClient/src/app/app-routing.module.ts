import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './components/browser/browser/browser.component';
import { MainComponent } from './components/main/main.component';
import { TestComponent } from './components/test/test/test.component';

const routes: Routes = [
  {path : 'main', component : MainComponent},
  {path : 'browser', component : BrowserComponent},
  {path : 'test', component : TestComponent},
  {path : '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
