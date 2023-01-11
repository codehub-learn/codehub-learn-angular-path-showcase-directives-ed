import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnInit {

  private show: boolean = false;

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef) {
  }

  @Input() set appCustomIf(value: boolean) {
    this.show = value;
  }

  ngOnInit(): void {
    if (this.show) {
      this.container.createEmbeddedView(this.template)
    } else {
      this.container.clear();
    }
  }
}
