import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
 
@Directive({ 
  selector: '[ttIf]' 
})
export class ttIfDirective  {
 
  _ttif!: boolean;
 
  constructor(private _viewContainer: ViewContainerRef,
            private templateRef: TemplateRef<any>) {
              
  }
 
 
  @Input()
  set ttIf(condition:any) {
    this._ttif = condition
    this._updateView();
  }
 
  _updateView() {
    if (this._ttif) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }
 
}