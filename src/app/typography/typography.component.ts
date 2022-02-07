import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }

  environmentList=[
    {
      "Environment":"BetMgm",
      "build_Version":"2.6.2",
      "Features":"Banking realted",
      "QA_Status":"In Progress"
    },{
      "Environment":"Nevada",
      "build_Version":"3.8.1",
      "Features":"Betting realted",
      "QA_Status":"Completed"
    },{
      "Environment":"Enatain",
      "build_Version":"4.7.9",
      "Features":"Gaming based",
      "QA_Status":"On Hold"
    },{
      "Environment":"Ivy",
      "build_Version":"9.6.7",
      "Features":"Indian betting plateform",
      "QA_Status":"In Progress"
    }
  ];

  filterEnvironments:any[]=[];

  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.warn('In setter',value);
    this.filterEnvironments=this.performFilter(value);
  }
  performFilter(filterBy:string):any[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.environmentList.filter((list:any)=>
      list.Environment.toLocaleLowerCase().includes(filterBy) || 
      list.Features.toLocaleLowerCase().includes(filterBy) || 
      list.QA_Status.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit() {
    this.filter='';
  }

  isDisc:boolean=false;
  sortEnvironment(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.filterEnvironments.sort(function(a:any,b:any){
      if(a[property]<b[property]){
        return -1*direction;
      }
      else if(a[property]>b[property]){
        return 1*direction;
      }
      else{
        return 0;
      }
    });
  }

}
