import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { typographyComponent } from '../../environment/typography.component';
import { ListEnvironmentComponent } from 'app/list-environment/list-environment.component';
import { EmployeeDataComponent } from 'app/user-profile/employee-data/employee-data.component';
import { AddTaskComponent } from 'app/table-list/add-task/add-task.component';
import { UpdateTaskComponent } from 'app/table-list/update-task/update-task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {MatIconModule} from '@angular/material/icon';


// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxOrgChartModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule
    // DropDownListModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    typographyComponent,
    ListEnvironmentComponent,
    EmployeeDataComponent,
    AddTaskComponent,
    UpdateTaskComponent
  ]
})

export class AdminLayoutModule {}
