import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() headertext = '';
    @Input() content = '';
    @Input() type = 'confirmation';
    @Input() affirmtext = 'Proceed';
    @Input() canceltext = 'Cancel';

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
