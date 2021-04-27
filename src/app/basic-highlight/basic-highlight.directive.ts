import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class basicHighlightDirective implements OnInit {
    constructor(private elementref: ElementRef) {}

    ngOnInit() {
        this.elementref.nativeElement.style.backgroundColor = 'blue';
    }
}