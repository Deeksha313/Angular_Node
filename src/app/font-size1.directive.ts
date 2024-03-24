import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize1]',
  standalone: true
})
export class FontSize1Directive implements OnChanges{

  constructor(private ele:ElementRef) { }
  @Input ('appFontSize1') fontsize:number=0;
  ngOnChanges(changes: SimpleChanges): void {
    const newFontSize=changes['fontsize'].currentValue;
    if(newFontSize){
      this.ele.nativeElement.style.fontsize=`${newFontSize}px`;
    }
  }

}
