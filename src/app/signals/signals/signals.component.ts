import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  firstName = signal('Rajeev');
  lastName = signal('Gupta');

  fullName = computed(() => this.firstName() + " " + this.lastName());

  courseName : string = 'Java';
  empId = signal<number>(531);

  cityList = signal(["Mumbai","Pune","Kolkata","Chennai"]);

  studentObj = signal({
    name : 'Rajeev',
    city : 'Navi-mumbai'
  });
  
  constructor(){

    const fname = this.firstName;

    setTimeout(() => {
      // this.firstName.set('Hello Angular!');
      this.courseName = 'Mean Stack';
    }, 5000);

  }

  changeName() {
    this.firstName.set('Sachin');
  }

  changeLastName() {
    // this.firstName.set('Sachin');
    this.lastName.set('Tendulkar');
  }

  addCity() {
    this.cityList.set([...this.cityList(), "Nagpur" ]);
  }

  changeStudentCityName() {
    this.studentObj.set({...this.studentObj(), city:'Lucknow'});
  }
}
