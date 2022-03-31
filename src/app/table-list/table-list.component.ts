import { Component, OnInit, VERSION } from '@angular/core';
import { employeeData } from 'app/dashboard/employee';
import { EmpDataService } from 'app/service/emp-data.service';
import { data } from 'jquery';
import { taskData } from './task';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {

  tasks: taskData[] = [];
  constructor(private empData: EmpDataService, private matDialog: MatDialog) {
    // empData.employee().subscribe((data)=>{
    //   this.employees=data;
    // })
    // this.tasks = empData.getSelectedTask(); 
  }

  filterTask: taskData[] = [];
  private _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    // console.warn('In setter',value);
    this.filterTask = this.performFilter(value);
  }

  performFilter(filterBy: string): taskData[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tasks.filter((list: taskData) =>
      list.task.toLocaleLowerCase().includes(filterBy));
  }

  // Sorting........
  isDisc: boolean = false;
  sortTask(property) {
    this.isDisc = !this.isDisc;
    let direction = this.isDisc ? 1 : -1;
    this.filterTask.sort(function (a: any, b: any) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

  ngOnInit() {
    this._filter = '';
    this.getData();

  }
  getData() {
    this.empData.task().subscribe({
      next: tasks => {
        this.tasks = tasks;
        this.filterTask = [...this.tasks];
      }
    })
  }
  // deleteTask(id: number) {
  //   this.empData.taskDelete(id).subscribe(res => {
  //   })
  //   this.getData();
  // }
  updateTask(id:number){
    console.log(id);
    let dialogConfig=new MatDialogConfig();
    dialogConfig.height = '500px';
    dialogConfig.width = '500px';
    dialogConfig.data = this.filterTask.find((task: any)=>{return task.eid == id});
    let dialog = this.matDialog.open(UpdateTaskComponent,dialogConfig);
  }
  openDialog() {
    console.log("dilog works");
    let dialogConfig = new MatDialogConfig();
    dialogConfig.height = '500px';
    dialogConfig.width = '500px';
    // dialogConfig.data = {
    //   employee:employee
    // };

    let dialog = this.matDialog.open(AddTaskComponent,dialogConfig);

    dialog.afterClosed().subscribe((res: any) => {
      console.log(res);
    });
  }
}
