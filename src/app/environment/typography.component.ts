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
  count=0;

  ngOnInit():void {
    // this.filter='';
    this.empData.environment().subscribe({
      next:nodes=>{
        this.nodes=nodes;
        this.setClassToNode(this.nodes);

        setTimeout(()=> {
          this.createElements(this.nodes);
        }, 100);
      //   console.warn(this.nodes);
      }
    })
  }

  setClassToNode(mainNode: any) {
    mainNode.forEach((node: any) => {
      node.cssClass = 'solid-name';
      this.setClassToNode(node.childs);
    });
  }

  createElements(mainNode: any) {
    
    mainNode.forEach((node: any) => {
      node.cssClass = 'solid-name';

      if (document.getElementsByClassName('solid-name')) {

        let ele: any = document.getElementsByClassName('solid-name')[this.count++];
        ele = ele.firstElementChild;
        let target: Element = ele.getElementsByClassName('ngx-org-title')[0];
    
        let fields = ['Admin','IIS','Singleton','Version'];

        fields.forEach((field: any) => {

          let div = document.createElement('div');
          div.classList.add('container');
          
          let nameLabel = document.createElement('label');
          nameLabel.innerHTML = field;
          nameLabel.classList.add('left');
          div.appendChild(nameLabel);

          let valueLabel = document.createElement('label');
          valueLabel.innerHTML = node[field];
          valueLabel.classList.add('right');
          div.appendChild(valueLabel);

          target.appendChild(div);
        });
        
        this.createElements(node.childs);
      }
    });
  }
  
  onEnvClick($event: any) {
    let bracketSplice=$event.name.split("(")[0];
    // console.log(bracketSplice);
    this.empData.getEnvironmentByName(bracketSplice).subscribe(res=>{
      this.empData.setSelectedEnvironment(res);
      this.empData.setValue();
    })
    this.router.navigateByUrl('/listEnvironment');
    // let passData;
    
    // console.log($event.name)
  }
}
