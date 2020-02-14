import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentThreeComponent } from './component-three/component-three.component';


const routes: Routes = [
  { path: 'one', component: ComponentOneComponent },
  { path: 'two', component: ComponentTwoComponent },
  { path: 'three', component: ComponentThreeComponent},
  {
    path: '',
    redirectTo: '/one',
    pathMatch: 'full'
  },
  { path: '**', component: ComponentOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
