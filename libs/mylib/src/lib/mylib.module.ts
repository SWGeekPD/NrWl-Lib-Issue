import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MycomponentComponent } from './mycomponent.component';
import {MYLIB_ROUTES} from "./mylib.route";
import {Mylib1Module} from "@coe-demo/mylib1";

@NgModule({
  imports: [
    CommonModule,
    Mylib1Module,
    RouterModule.forChild(MYLIB_ROUTES)
  ],
  declarations: [MycomponentComponent]
})
export class MylibModule {}
