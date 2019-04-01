import {Directive, ElementRef, HostListener, Input, Output} from '@angular/core';
import {OnChanges, EventEmitter} from '@angular/core';


@Directive({
    selector: '[appContentEditableModel]',
})
export class ContenteditableModelDirective implements OnChanges {
    @Input() appContentEditableModel: any;
    @Output() appContentEditableModelChange = new EventEmitter();

    private lastViewModel: any;


    @HostListener('blur', ['$event'])
    onBlur() {
        const value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.appContentEditableModelChange.emit(value);
    }

    @HostListener('keyup.enter', ['$event'])
    onKeyUp() {
        const value = this.elRef.nativeElement.innerText;
        this.lastViewModel = value;
        this.appContentEditableModelChange.emit(value);
    }


    constructor(private elRef: ElementRef) {
    }

    ngOnChanges() {
        this.lastViewModel = this.appContentEditableModel;
        this.refreshView();
    }


    private refreshView() {
        this.elRef.nativeElement.innerText = this.appContentEditableModel;
    }
}
