import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onNextClick() {
    var elm =
      this.el.nativeElement.parentElement.parentElement.parentElement.children;
    var item = elm.getElementsByClassName('item');
    elm.append(item[0]);
  }
}
