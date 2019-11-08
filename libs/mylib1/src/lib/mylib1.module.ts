import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mycomponent1Component } from './mycomponent1.component';
import {MYLIB1_ROUTES} from "./mylib1.route";

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(MYLIB1_ROUTES)
  ],
  declarations: [Mycomponent1Component]
})
export class Mylib1Module {}
