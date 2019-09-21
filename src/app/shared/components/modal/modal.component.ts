import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() is_modal_displayed = {
        type: 'confirmation',
        headertext: 'Modal Header',
        content: 'Modal Body',
        affirmtext: 'Proceed',
        canceltext: 'Cancel',
    };


    @Output() close = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    closeModal() {
        this.close.emit(false);
    }

    affirm() {
        this.close.emit(true);
    }

}
