import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() childInput:string | undefined;
  @Output() sendValue = new EventEmitter <string>();
  sendValuetoParent(){
    this.sendValue.emit('Value from Parent');
  }

}
