import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp:Employee = null;

  constructor(private empService:EmployeeService) { 

  }

  ngOnInit() {
    this.emp = new Employee();
  }

  submit(){
    console.log("About to create "+this.emp.empId);
    this.empService.create(this.emp).subscribe(result=>{ 
      console.log(result.statusText);
    });
  }
}
