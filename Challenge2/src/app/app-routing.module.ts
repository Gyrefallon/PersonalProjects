import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import { CorrectComponent } from './correct/correct.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'signin'},
  {path: 'signin',component: SigninComponent},
  {path: 'correct',component: CorrectComponent,canActivate:[VigilanteGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
