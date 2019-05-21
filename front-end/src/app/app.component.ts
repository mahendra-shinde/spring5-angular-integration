import { Component } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './service/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Portal : Front End!';
  emp:Employee;
  id:number;
  errMessage:string;
  constructor(private empService:EmployeeService){ }

  findEmp(){
    this.emp=null;
    this.errMessage = null;
    this.empService.findById(this.id).    
    subscribe((result:Employee)=>{
      this.emp = result;
      console.log("Fetched record for employee: "+result.empId);
    },err=>{
      this.errMessage=err.error;
      console.log("Error Occured:" + err.error);
    });
    }
}
