import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FetchCityComponent } from '../app/fetch-city/fetch-city.component';
import { AddCityComponent } from './add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchEmployeeComponent,
    AddEmployeeComponent,
    FetchCityComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-city', component: FetchCityComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 'register-employee', component: AddEmployeeComponent },
      { path: 'employee/edit/:id', component: AddEmployeeComponent },
      { path: 'add-city', component: AddCityComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
