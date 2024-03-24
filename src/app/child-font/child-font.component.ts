import { Component, Input } from '@angular/core';
import { FontSizeDirective } from '../font-size.directive';

FontSizeDirective
@Component({
  selector: 'app-child-font',
  standalone: true,
  imports: [FontSizeDirective],
  templateUrl: './child-font.component.html',
  styleUrl: './child-font.component.css'
})
export class ChildFontComponent {
  @Input() fsize:number=10;
  
}
