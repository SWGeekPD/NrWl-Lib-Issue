import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: "mylib",
    loadChildren: () => import("@coe-demo/mylib").then(m => m.MylibModule)
  },
  {
    path: "mylib1",
    loadChildren: () => import("@coe-demo/mylib1").then(m => m.Mylib1Module)
  }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    RouterModule.forRoot(ROUTES, {
      initialNavigation: "enabled",
      enableTracing: false
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
