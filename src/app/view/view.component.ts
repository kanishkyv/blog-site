import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/services/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:number;
  
  employee:Employee={
    id:0,
    title:'',
    username:'',
    content:'',
    createdOn:''
  }

  constructor(private router:Router , private route:ActivatedRoute,private employeeSerive:EmployeeService) { }

  ngOnInit() { this.id= +this.route.snapshot.paramMap.get('id');
  this.employee=this.employeeSerive.onGetEmployee(this.id);

  }
  

}
