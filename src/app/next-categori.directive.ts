import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNextCategori]',
})
export class NextCategoriDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  nextCategori() {
    var elm = this.el.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item2');

    elm.append(item[0]);
  }
}
