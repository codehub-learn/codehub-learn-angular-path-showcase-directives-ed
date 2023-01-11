import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorIt2]'
})
export class ColorIt2Directive implements OnInit{
  private coloured: boolean = false;
  private color!: string;
  @Input() appColorIt2: string = "pink";
  @Input() revertColor: string = "black";

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.color = this.appColorIt2;
  }

  toggleColour() {
    if (!this.coloured) {
      this.renderer.setStyle(this.element.nativeElement, "color", this.color);
    } else {
      this.renderer.setStyle(this.element.nativeElement, "color", this.revertColor);
    }
    this.coloured = !this.coloured;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggleColour();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleColour();
  }
}
