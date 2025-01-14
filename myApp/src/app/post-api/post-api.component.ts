import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css'] 
})
export class PostApiComponent implements OnInit {
  deptObj: { departmentId: number; departmentName: string; departmentLogo: string } = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: ''
  };

  deptList: any[] = [];

  http = inject(HttpClient); // Injecting HttpClient instance

  // Executes when the component is loaded
  ngOnInit() {
    this.getDepartment();
  }

  // Save department
  saveDept() {
    this.http
      .post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department added successfully');
          this.resetForm(); // Clear the form after saving
          this.getDepartment(); // Refresh the department list
        } else {
          alert(res.message);
        }
      });
  }

  // Get department
  getDepartment() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        this.deptList = res.data;
      });
  }

  // Delete department
  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this department?');
    if (isDelete) {
      this.http
        .delete(`https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=${id}`)
        .subscribe((res: any) => {
          if (res.result) {
            alert('Department deleted successfully');
            this.getDepartment(); // Refresh the department list
          } else {
            alert(res.message);
          }
        });
    }
  }

  // Edit department
  onEdit(data: any) {
    this.deptObj = data;
  }

  // Update department
  updateDept() {
    this.http
      .put('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.deptObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department updated successfully');
          this.resetForm(); // Clear the form after updating
          this.getDepartment(); // Refresh the department list
        } else {
          alert(res.message);
        }
      });
  }

  // Clear the form
  resetForm() {
    this.deptObj = {
      departmentId: 0,
      departmentName: '',
      departmentLogo: ''
    };
  }
}
