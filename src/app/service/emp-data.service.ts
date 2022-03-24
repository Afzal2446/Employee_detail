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
  public teamUrl = "http://10.1.113.124:82/api/Team";
  public taskUrl = "http://10.1.113.124:82/api/Task";
  public environmentUrl = "http://10.1.113.124:82/api/Environment";

  constructor(private http: HttpClient) { }

  //Employee Services.........
  employee(): Observable<employeeData[]> {
    return this.http.get<employeeData[]>(this.teamUrl);
  }
  employeePost(data: any) {
    return this.http.post(this.teamUrl, JSON.stringify(data));
  }
  employeeDelete(name: string) {
    return this.http.delete(this.teamUrl);
  }

  //Task Services............
  task(): Observable<taskData[]> {
    return this.http.get<taskData[]>(this.taskUrl);
  }
  taskPost(data: any) {
    console.log(data);
    return this.http.post(this.taskUrl, data);
  }
  taskUpdate(data: any) {
    return this.http.put(this.taskUrl, data);
  }
  taskDelete(id: number) {
    // let data = { body: { "eid": id } };
    return this.http.delete(this.taskUrl+"?Id="+id);
  }

  //Environment Services..........
  environment(): Observable<any[]> {
    return this.http.get<any[]>(this.environmentUrl);
  }
  // saveUsers(data:any){
  //   return this.http.post(this.url, data);
  // }
  private selectedEmployee: any;
  setSelectedEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
  getSelectedEmploee() {
    return this.selectedEmployee;
  }

  private selectedTask: any;
  setSelectedTask(task: any) {
    this.selectedTask = task;
    // console.warn(this.selectedTask);
  }
  getSelectedTask() {
    return this.selectedTask;
  }

  private selectedEnvironment: any;
  setSelectedEnvironment(insertEnv: any) {
    this.selectedEnvironment = insertEnv;
    // console.log(insertEnv);
  }
  getSelectedEnvironment() {
    return this.selectedEnvironment;
  }
}
