import { Directive, ElementRef } from '@angular/core';

@Directive({ 
     selector: '[niceTheme]' 
})
export class NiceThemeDirective {
    constructor(elRef: ElementRef) {
       elRef.nativeElement.style.color = 'black';
       elRef.nativeElement.style.backgroundColor = 'cyan';
       elRef.nativeElement.style.fontSize = '40px';
    }
} 