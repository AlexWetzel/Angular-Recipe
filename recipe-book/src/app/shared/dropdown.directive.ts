import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  // @Input() classToggle: string

  // constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  // @HostListener('click') onclick(eventData: Event) {

  //   if(this.elemRef.nativeElement.classList.contains(this.classToggle)){
  //     this.renderer.removeClass(this.elemRef.nativeElement, this.classToggle);
  //   } else {
  //     this.renderer.addClass(this.elemRef.nativeElement, this.classToggle);
  //   }
  // }

}
