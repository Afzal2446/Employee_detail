import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeData } from 'app/dashboard/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  private selectedEmployee: {
    name: string,
    task: string
  };

  public url="api/employee.json";
  constructor(private http:HttpClient) { }
  employee():Observable<employeeData[]>{
    return this.http.get<employeeData[]>(this.url);
  }
  // saveUsers(data:any){
  //   return this.http.post(this.url, data);
  // }

  setSelectedEmployee(employee: any) {
    this.selectedEmployee = employee;
  }

  getSelectedEmploee() {
    return this.selectedEmployee;
  }
}
