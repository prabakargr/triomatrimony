import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {NavbarComponent} from './component.navbar';
import { SectionHomeComponent} from './component.sectionhome';
import {SectionPlansComponent} from './component.sectionplans';
import {SearchSectionComponent} from './component.searchsection';
import {QuickSearchComponent} from './component.searchquicksection';
import {RegularSearchComponent} from './component.searchregularsection';
import {FooterComponent} from './component.footer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionHomeComponent,
    SectionPlansComponent,
    SearchSectionComponent,
    QuickSearchComponent,
    RegularSearchComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'home',component:SectionHomeComponent},
      {path:'plans',component:SectionPlansComponent},
      {path:'', pathMatch:'prefix', redirectTo:'home'},
      {path:'search',component:SearchSectionComponent,
    children:[
      {path:'quicksearch',component:QuickSearchComponent},
      {path:'regularsearch',component:RegularSearchComponent},
      {path:'',pathMatch:'prefix',redirectTo:'quicksearch'}
    ]
    }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
