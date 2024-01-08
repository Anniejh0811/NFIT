import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MembershipTempComponent } from './membership-temp/membership-temp.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'programs', component:ProgramsComponent},
  {path: 'membership', component:MembershipTempComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', component:HomeComponent, pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
