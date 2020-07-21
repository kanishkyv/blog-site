import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../services/employee.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees:Employee[];
title:string;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit():void {
   this.employees= this.employeeService.onGet();
  }
  onDelete(id:number){
    this.employeeService.onDelete(id);
  }

  Search(){
    if(this.title !=""){
      this.employees=this.employees.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });

    }else if(this.title ==""){
      this.ngOnInit;
    }
   

  }
}
