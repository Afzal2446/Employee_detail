import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeData } from 'app/dashboard/employee';
import { Observable } from 'rxjs';
import { taskData } from 'app/table-list/task';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  // public url="api/employee.json";
  public url="http://10.1.113.124:82/api/Employee";
  public url2="http://10.1.113.124:82/api/Task";
  public url3="api/environment.json";

  constructor(private http:HttpClient) { }

  employee():Observable<employeeData[]>{
    return this.http.get<employeeData[]>(this.url);
  }

  task():Observable<taskData[]>{
    return this.http.get<taskData[]>(this.url2);
  }

  environment():Observable<any[]>{
    return this.http.get<any[]>(this.url3);
  }
  // saveUsers(data:any){
  //   return this.http.post(this.url, data);
  // }
  private selectedEmployee:any;
  setSelectedEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
  getSelectedEmploee() {
    return this.selectedEmployee;
  }

  private selectedTask:any;
  setSelectedTask(task:any){
    this.selectedTask=task;
    // console.warn(this.selectedTask);
  }
  getSelectedTask(){
    return this.selectedTask;
  }

  private selectedEnvironment:any;
  setSelectedEnvironment(insertEnv:any){
    this.selectedEnvironment=insertEnv;
    // console.log(insertEnv);
  }
  getSelectedEnvironment(){
    return this.selectedEnvironment;
  }
}
