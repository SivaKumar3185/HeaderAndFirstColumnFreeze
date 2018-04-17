import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnFreezeComponent } from './column-freeze/column-freeze.component';

const routes: Routes = [
  { path: 'column-freeze', component: ColumnFreezeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
