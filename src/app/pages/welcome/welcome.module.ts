import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
