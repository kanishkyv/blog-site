import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/services/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  header:string;
  employee:Employee={
    id:0,
    title:'',
    username:'',
    content:'',
    createdOn:''
  }

  constructor(private router:Router , private route:ActivatedRoute,private employeeSerive:EmployeeService) { }

  ngOnInit() {
   this.id= +this.route.snapshot.paramMap.get('id');
  this.header=this.id===0?'Add Blog':'Edit Blog';

  if(this.id !=0){
    this.employee=this.employeeSerive.onGetEmployee(this.id);
  }
  }
onSubmit(form:NgForm){
console.log(form.value);
let employee:Employee={
  id: form.value.id,
  title:form.value.title,
  content:form.value.content,
  username:form.value.username,
  createdOn:form.value.createdOn
}


if(this.id === 0){
this.employeeSerive.onAdd(employee);
}else{
  this.employeeSerive.onupdate(employee);
}
this.router.navigateByUrl('');
}
}
