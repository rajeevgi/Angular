import { HttpClient } from '@angular/common/http';
import { Component, inject , OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{
  
  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  deptList:any[] = [];
  
  // It will execute when the component is loaded.
  ngOnInit() {
    this.getDepartment();
  }
  
  // Creating an instance of HttpClient through dependency injection.
  http = inject(HttpClient);

  saveDept() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department added successfully");
      } else {
        alert(res.message);
      }
    });
  }

  getDepartment() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res: any) => {
      this.deptList = res.data;
    });
  }
}
