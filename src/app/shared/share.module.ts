import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DateAgoPipe } from './pipes/time-ago.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PageNotFoundComponent, DateAgoPipe],
  exports: [PageNotFoundComponent, DateAgoPipe, ReactiveFormsModule]
})
export class SharedModule { }
