import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}

	// @HostListener('mouseenter') addOpen() {
	// 	this.isOpen = !this.isOpen;
	// }

	// @HostListener('mouseleave') removeOpen() {
	// 	this.isOpen = !this.isOpen;
	// }


  constructor() { }

}
