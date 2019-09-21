import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
    public is_modal_displayed = false;


    constructor() {
    }

    ngOnInit() {
    }


    showModal() {
        this.is_modal_displayed = true;
    }

    closeModal(event) {
        if (event === true) {
            // Action Here

        }

        this.is_modal_displayed = false;

    }

}
