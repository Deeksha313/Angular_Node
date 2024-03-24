import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective implements OnChanges{

  constructor(private el:ElementRef) { }
  @Input('appFontSize') fontsize:number=0;
  ngOnChanges(changes: SimpleChanges): void {
    const newFontSize=changes['fontsize'].currentValue;
    if(newFontSize){
      this.el.nativeElement.style.fontSize=`${newFontSize}px`;
    }
  }
  

}
