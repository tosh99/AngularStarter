import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    @Input() is_message_displayed = {
        type: 'message',
        message: '',
        isdisplayed: false
    };

    constructor() {
    }

    ngOnInit() {
    }

}
