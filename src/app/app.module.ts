import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightsComponent } from './highlights/highlights.component';
import { MembershipComponent } from './membership/membership.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { MembershipTempComponent } from './membership-temp/membership-temp.component';
import { MembersBenefitComponent } from './members-benefit/members-benefit.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightsComponent,
    MembershipComponent,
    FooterComponent,
    ProgramsComponent,
    MembershipTempComponent,
    MembersBenefitComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
