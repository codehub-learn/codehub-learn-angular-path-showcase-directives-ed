import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorIt]'
})
export class ColorItDirective {

  private coloured: boolean = false;

  // compatible with nodejs etc...
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  toggleColour(){
    console.log(this.element);
    if(!this.coloured){
      this.renderer.setStyle(this.element.nativeElement, "color", "pink");
    } else {
      this.renderer.setStyle(this.element.nativeElement, "color", "black");
    }
    this.coloured = !this.coloured;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.toggleColour();
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.toggleColour();
  }




}
