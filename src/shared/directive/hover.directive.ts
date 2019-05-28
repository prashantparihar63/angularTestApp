import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef) {
    
  }

  @HostListener('mouseover') onMouseHover(){
    this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave')  onMouseBlue(){
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.color = 'black';
  }

}
