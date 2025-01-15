import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-example',
  imports: [CommonModule],
  templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.css'
})
export class TemplateExampleComponent {

  isUserLoggedIn : boolean = false;
  loggedUserName : string = '';

  @ViewChild('dynamicTem') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read : ViewContainerRef }) dynamicContainer : ViewContainerRef | undefined


  loadTemplate() {
    if(this.dynamicTemplate){
      this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate);
    }
  }
}
