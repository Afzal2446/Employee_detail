import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class typographyComponent implements OnInit {

  constructor() { }

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

  // nodes: any = [
  //   {
  //     name: 'Pranav AS',
  //     cssClass: 'ngx-org-ceo',
  //     image: '',
  //     title: 'Chief Executive Officer',
  //     childs: [
  //       {
  //         name: 'Afzal',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, Google Cloud',
  //       },
  //       {
  //         name: 'Shubhankit',
  //         cssClass: 'ngx-org-ceo',
  //         image: 'assets/node.svg',
  //         title: 'CEO, YouTube',
  //         childs: [
  //           {
  //             name: 'Krupashankar',
  //             cssClass: 'ngx-org-head',
  //             image: 'assets/node.svg',
  //             title: 'Global Head of Business Operations',
  //             childs: []
  //           },
  //           {
  //             name: 'Riya Mishra',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Agency and Brand Solutions',
  //             childs: []
  //           },
  //           {
  //             name: 'Ariel Bardin',
  //             cssClass: 'ngx-org-vp',
  //             image: 'assets/node.svg',
  //             title: 'VP, Product Management',
  //             childs: []
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Riya mishra',
  //         cssClass: 'ngx-org-head',
  //         image: 'assets/node.svg',
  //         title: 'Head of Artificial Intelligence',
  //         childs: [
  //           {
  //             name: 'David Feinberg',
  //             cssClass: 'ngx-org-ceo',
  //             image: 'assets/node.svg',
  //             title: 'CEO, Google Health',
  //             childs: []
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  nodes: any = [
    {
      name: 'QaLab1',
      cssClass: 'ngx-org-ceo',
      image: '',
      title: 'IP:123',
      // DB:'test1, test2, test3',
      childs: [
        {
          name: 'QaLab3',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: ' 21.5.19'

          // IP:'12',
          // IP-38213.
        },
        {
          name: 'QaLab4',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: '21.4.12',
        },
        {
          name: 'QaLab5',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
          title: '21.4.12',
        },
        {
          name: 'QaLab6',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: '21.10.12',
              childs: [
            {
              name: 'QaLab7',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: '21.10.12',
            },
            {
              name: 'QaLab8',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: '21.10.12',
            },
          ]
        },
        {
          name: 'Lab1',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: '22.02.02',
        },
        {
          name: 'Lab2',
          cssClass: 'ngx-org-ceo',
          image: 'assets/node.svg',
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

}
