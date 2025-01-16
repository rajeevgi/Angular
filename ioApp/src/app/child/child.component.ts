import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // username : string = "John Doe";

  // @Input() username !: string;

  // @Output() messageSent = new EventEmitter<string>();  // EventEmitter to send the message

  // Method to emit the message
  // sendMessage(){
  //   this.messageSent.emit('Hello from the child!'); // Emit the message when the button is clicked
  // }

    // @Input() items : string[] = []; // Receiving the items from the parent.

      // @Input() users !: { name : string, gender : string };

      // @Output() dataSent = new EventEmitter<{ username : string, email : string}>();

      // sendData() {
      //   this.dataSent.emit({ username : 'rajeev29', email : 'rajeev29@gmail.com'});
      // }

    @Input() data !: string;   // Receiving data from parent.
    
    @Output() dataChange = new EventEmitter<string>();  // Emit changes to parent

    // method to change the data send it back to the parent
    updateData(newData : string){
      this.data = newData;
      this.dataChange.emit(this.data);
    }
}
