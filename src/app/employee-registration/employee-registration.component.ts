import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTM5MmI2NzJkYzkyMDIwNzZjZGMyMiIsInVzZXJuYW1lIjoiMDAyODc4MjIwIiwiaWF0IjoxNzEzNzA1NzQ3LCJleHAiOjE3MTU4NjU3NDd9.bYgsvMmRbLE1mGbNeejtv24KFr4DncKMH2GPbl7CdSg';

  employeeList: any[] = [];
  isListView:boolean = true;
  isUpdating: boolean = false;
  employeeObject: any = {
    "_id":"",
    "firstName":"",
    "lastName": "",
    "gender":"",
    "email":"",
    "phoneNo":""
  }
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee(){
    const apiUrl = 'https://smooth-comfort-405104.uc.r.appspot.com/document/findAll/employee';
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    this.http.get(apiUrl, { headers }).subscribe(
      (res: any) => {
        this.employeeList = res.data;
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }

  onCreateEmp(){
    const apiUrl = 'https://smooth-comfort-405104.uc.r.appspot.com/document/createorupdate/employee';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });

    this.http.post(apiUrl, this.employeeObject, { headers }).subscribe(
      (res: any) => {
        alert(res.message);
        this.loadEmployee();
      },
      (error) => {
        console.error('Error creating employee:', error);
      }
    );
  }

  onEdit(item: any){
    this.isUpdating = true;
    this.employeeObject = item;
    this.isListView = false;
  }

  onUpdateEmp() {
    const apiUrl = `https://smooth-comfort-405104.uc.r.appspot.com/document/updateOne/employee/${this.employeeObject._id}`;
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
  
    const employeeData = {
      firstName: this.employeeObject.firstName,
      lastName: this.employeeObject.lastName,
      departmentId: this.employeeObject.departmentId,
      gender: this.employeeObject.gender,
      email: this.employeeObject.email,
      phoneNo: this.employeeObject.phoneNo,
    };

   this.employeeObject = {
      "_id":"",
      "firstName":"",
      "lastName": "",
      "gender":"",
      "email":"",
      "phoneNo":""
    }
  
    this.http.put(apiUrl, employeeData, { headers }).subscribe(
      (res: any) => {
        alert(res.message);
        this.isListView = true; // Return to the list view after successful update
        this.loadEmployee(); // Reload the employee list
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }

  onDelete(item: any) {
    const apiUrl = `https://smooth-comfort-405104.uc.r.appspot.com/document/deleteOne/employee/${item._id}`;
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`
    });
  
    this.http.delete(apiUrl, { headers }).subscribe(
      (res: any) => {
        alert(res.message);
        this.loadEmployee(); // Reload the employee list after successful delete
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
  

}
