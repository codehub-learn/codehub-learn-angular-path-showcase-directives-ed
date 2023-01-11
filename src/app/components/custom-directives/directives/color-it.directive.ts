import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorIt]'
  //selector: 'p[appColorIt]'
})
export class ColorItDirective {

  private coloured: boolean = false;

  @Input() color: string = "pink";

  // compatible with nodejs etc...
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  toggleColour(){
    console.log(this.element);
    if(!this.coloured){
      this.renderer.setStyle(this.element.nativeElement, "color", this.color);
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
