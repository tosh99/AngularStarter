import {Directive, ElementRef, Input} from '@angular/core';


@Directive({
    selector: '[appFlex]',
})
export class FlexBoxModelDirective {
    @Input() flexDirection: string = 'row';
    @Input() justify: string = 'center';
    @Input() align: string = 'center';

    constructor(private elRef: ElementRef) {
        elRef.nativeElement.style.display = 'flex';

        // Set Properties
        elRef.nativeElement.style.flexDirection = this.flexDirection;
        elRef.nativeElement.style.justifyContent = this.justify;
        elRef.nativeElement.style.alignItems = this.align;
    }


}
