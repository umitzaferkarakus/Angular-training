import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncateDemoComponent } from './truncate-demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TruncateDemoComponent,
    RouterModule.forChild([
      { path: '', component: TruncateDemoComponent }
    ])
  ]
})
export class TruncateDemoModule {}
