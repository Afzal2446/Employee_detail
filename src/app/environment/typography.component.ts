import { Component, OnInit } from '@angular/core';
import { EmpDataService } from 'app/service/emp-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class typographyComponent implements OnInit {

  constructor(private empData: EmpDataService, private router: Router) { }

  typographyList=[
    {
      "typography":"BetMgm",
      "build_Version":"2.6.2",
      "Features":"Banking realted",
      "QA_Status":"In Progress"
    },{
      "typography":"Nevada",
      "build_Version":"3.8.1",
      "Features":"Betting realted",
      "QA_Status":"Completed"
    },{
      "typography":"Enatain",
      "build_Version":"4.7.9",
      "Features":"Gaming based",
      "QA_Status":"On Hold"
    },{
      "typography":"Ivy",
      "build_Version":"9.6.7",
      "Features":"Indian betting plateform",
      "QA_Status":"In Progress"
    }
  ];

  filtertypographys:any[]=[];

  private _filter:string='';
  get filter():string{
    return this._filter;
  }
  set filter(value:string){
    this._filter=value;
    console.warn('In setter',value);
    this.filtertypographys=this.performFilter(value);
  }
  performFilter(filterBy:string):any[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.typographyList.filter((list:any)=>
      list.typography.toLocaleLowerCase().includes(filterBy) || 
      list.Features.toLocaleLowerCase().includes(filterBy) || 
      list.QA_Status.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit() {
    this.filter='';
  }

  nodes: any = [
    {
      name: 'QaLab1',
      cssClass: 'ngx-org-ceo',
      title: '21.04.12',
      childs: [
        {
          name: 'QaLab3',
          cssClass: 'ngx-org-ceo',
          title: '21.5.19',
          version: '12',
          db:'sql'
        },
        {
          name: 'QaLab4',
          cssClass: 'ngx-org-ceo',
          title: '21.4.12',
        },
        {
          name: 'QaLab5',
          cssClass: 'ngx-org-ceo',
          title: '21.4.12',
        },
        {
          name: 'QaLab6',
          cssClass: 'ngx-org-head',
          title: '21.10.12',
              childs: [
            {
              name: 'QaLab7',
              cssClass: 'ngx-org-vp',
              title: '21.10.12',
            },
            {
              name: 'QaLab8',
              cssClass: 'ngx-org-vp',
              title: '21.10.12',
            },
          ]
        },
        {
          name: 'Lab1',
          cssClass: 'ngx-org-head',
          title: '22.02.02',
        },
        {
          name: 'Lab2',
          cssClass: 'ngx-org-ceo',
          title: '22.04',
        }
      ]
    }
  ];

  isDisc:boolean=false;
  sorttypography(property) {
    this.isDisc=!this.isDisc;
    let direction= this.isDisc?1:-1;
    this.filtertypographys.sort(function(a:any,b:any){
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

  onEnvClick($event: any) {
    this.router.navigateByUrl('/listEnvironment');
    this.empData.setSelectedEnvironment($event);
    // console.log($event)
  }
}
