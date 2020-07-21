import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=[
    {
      id:1,
      title:"one",
      content:"first content starts......................................first content ends",
      username:"firstuser",
      createdOn:"july"
    },
    {
      id:2,
      title:"two",
      content:"second content starts.....................................second content ends",
      username:"second user",
      createdOn:"6th august"
    },
   
  ];

  constructor() { }
  onGet(){
    return this.employees;
  }
  onAdd(employee:Employee){
    this.employees.push(employee);
  }
  onDelete(id:number){
let employee = this.employees.find(x=>x.id===id);
let index= this.employees.indexOf(employee,0);
this.employees.splice(index,1);
  }
  onGetEmployee(id:number){
  return this.employees.find(x=>x.id === id)
  }
  onupdate(employee:Employee){
    let oldEmployee=this.employees.find(x=>x.id === employee.id);
    oldEmployee.title=employee.title;
    oldEmployee.content=employee.content;
    oldEmployee.username=employee.username;
    oldEmployee.createdOn=employee.createdOn;
  }
}
