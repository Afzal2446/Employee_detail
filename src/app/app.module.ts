import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { typographyComponent } from './environment/typography.component';
import { ListEnvironmentComponent } from './list-environment/list-environment.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { employeeData } from './dashboard/employee';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { EmployeeDataComponent } from './user-profile/employee-data/employee-data.component';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatButtonModule} from '@angular/material/button';
import { UpdateTeamComponent } from './user-profile/update-team/update-team.component';


// import { UpdateTaskComponent } from './table-list/update-task/update-task.component';
// import { AddTaskComponent } from './table-list/add-task/add-task.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxOrgChartModule,
    MatButtonModule,
    // MatAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
    
    // UpdateTaskComponent,
    // AddTaskComponent,
    // EmployeeDataComponent,
    // DashboardComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
