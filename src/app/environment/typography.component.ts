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

  nodes:any[];
  ngOnInit():void {
    // this.filter='';
    this.empData.environment().subscribe({
      next:nodes=>{
        this.nodes=nodes;
        console.warn(this.nodes);
      }
    })
  }
  
  // isDisc:boolean=false;
  // sorttypography(property) {
  //   this.isDisc=!this.isDisc;
  //   let direction= this.isDisc?1:-1;
  //   this.filtertypographys.sort(function(a:any,b:any){
  //     if(a[property]<b[property]){
  //       return -1*direction;
  //     }
  //     else if(a[property]>b[property]){
  //       return 1*direction;
  //     }
  //     else{
  //       return 0;
  //     }
  //   });
  // }

  // nodes:any=[
  //   {
  //     "ID": 1,
  //     "p_ID": 0,
  //     "name": "Qalab1(10.12.13.14)",
  //     "Version": "12.4.10",
  //     "Database": "Primeline1",
  //     "cssClass": "ngx-org-ceo",
  //     "childs": [
  //       {
  //         "ID": 2,
  //         "p_ID": 1,
  //         "name": "Qalab2(10.12.13.14)",
  //         "Version": "12.4.10",
  //         "Database": "Primeline1",
  //         "cssClass": "ngx-org-head",
  //         "childs": [
  //           {
  //             "ID": 3,
  //             "p_ID": 2,
  //             "name": "Qalab3(10.12.13.14)",
  //             "Version": "12.4.10",
  //             "Database": "Primeline1",
  //             "cssClass": "ngx-org-vp",
  //             "childs": []
  //           },
  //           {
  //             "ID": 4,
  //             "p_ID": 2,
  //             "name": "Qalab4(10.12.13.14)",
  //             "Version": "12.4.10",
  //             "Database": "Primeline1",
  //             "cssClass": "ngx-org-vp",
  //             "childs": []
  //           }
  //         ]
  //       },
  //       {
  //         "ID": 5,
  //         "p_ID": 1,
  //         "name": "Qalab5(10.12.13.14)",
  //         "Version": "12.4.10",
  //         "Database": "Primeline1",
  //         "cssClass": "ngx-org-ceo",
  //         "childs": []
  //       }
  //     ]
  //   }
  // ];
  
  onEnvClick($event: any) {
    this.router.navigateByUrl('/listEnvironment');
    this.empData.setSelectedEnvironment($event);
    // console.log($event.name)
  }
}
