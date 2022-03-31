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
  public specificLabDataUrl="http://10.1.113.124:82/api/LabData/";
  public labData="http://10.1.113.124:82/api/LabData/lab1";
  // https://mocki.io/v1/c7efbc44-8ace-4be2-8c4b-2c3f0d76900b
  //http://10.1.113.124:82/api/LabData/lab1

  constructor(private http: HttpClient) { }

  //Employee Services.........
  employee(): Observable<employeeData[]> {
    return this.http.get<employeeData[]>(this.teamUrl);
  }
  employeePost(data: any) {
    return this.http.post(this.teamUrl, data);
  }
  employeeDelete(id:number) {
    return this.http.delete(this.teamUrl+"?Id="+id);
  }

  //Task Services............
  task(): Observable<taskData[]> {
    return this.http.get<taskData[]>(this.taskUrl);
  }
  taskPost(data: any) {
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
  
  // firstLab="QALab1";
  // initialShowEnvironment():Observable<any[]>{
  //   return this.http.get<any[]>(this.environmentUrl+"/"+this.firstLab)
  // }
  getEnvironmentByName(name:string):Observable<any[]>{
    return this.http.get<any[]>(this.environmentUrl+"/"+name);
  }
  initialShowData():Observable<any[]>{
    return this.http.get<any[]>(this.labData);
  }
  getLabData(name:string):Observable<any[]>{
    return this.http.get<any[]>(this.specificLabDataUrl+name);
  }
 
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

 private selectedEnvironment;
  setSelectedEnvironment(insertEnv: any) {
    this.selectedEnvironment = insertEnv;
    // console.log(typeof this.selectedEnvironment);
    // console.log(this.selectedEnvironment);
  }
  getSelectedEnvironment() {
    return this.selectedEnvironment;
  }

  private value;
  setValue(){
    this.value=true;
  }
  getValue(){
    return this.value;
  }
}
