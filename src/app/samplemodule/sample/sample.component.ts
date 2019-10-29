import {Component, OnInit} from '@angular/core';
import {ComponentInterfaceService} from "../../shared/interfaces/component.interface";
import {GlobalStateVariables} from "../../shared/services/globalstate.service";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
    selector: 'app-root',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements ComponentInterfaceService {
    // UI Variables
    public app_params = {
        isinitialised: false,
        user: {}
    };
    public loader_params = {
        isdisplayed: false
    };
    public modal_params = {
        context: 'mycontext',
        type: 'confirmation',
        headertext: 'Modal Header',
        content: 'Modal Body',
        affirmtext: 'Proceed',
        canceltext: 'Cancel',
        isdisplayed: false
    };
    public message_params = {
        type: 'message',
        message: 'Sample Message',
        isdisplayed: false
    };

    // Dropdown Variables
    public metadata: {
        // Assign Dropdown Keys Here
    };

    // Data Variables
    public coredata;


    constructor(private globalstate: GlobalStateVariables, private service: UtilsService) {
        GlobalStateVariables._globalState.subscribe((val) => {
            if (!this.app_params.isinitialised) {
                this.app_params.isinitialised = true;


            }
        })
    }

    /*  --------------------------------   Base Implementations  ---------------------- */

    // Function for retreiving dropdown Values
    loadMetaData() {
        this.toggleLoader(true);
        this.toggleMessage(false);
    };

    // Function for retreiving data Values
    loadData() {
        this.toggleLoader(true);
        this.toggleMessage(false);

        const payload = {};
        this.service.parseEnv('', 'POST', payload).subscribe((val) => {
            this.toggleLoader(false);
            this.transformData();

        }, (err) => {
            this.toggleLoader(false);
            this.toggleMessage(true, 'Server Error', 'error')
        })


    };

    transformData() {
    }


    toggleModal(action?) {
        if (action === true || action === false) {
            // Action Here
            this.modal_params.isdisplayed = false;
        } else {
            this.modal_params.isdisplayed = !this.modal_params.isdisplayed;
        }
    }

    toggleLoader(isdisplayed?) {
        if (isdisplayed === true || isdisplayed === false) {
            this.loader_params.isdisplayed = isdisplayed;
        } else {
            this.loader_params.isdisplayed = !this.loader_params.isdisplayed;
        }
    }

    toggleMessage(isdisplayed?, message?, type?) {
        if (message) {
            this.message_params.message = message;
        }
        if (type) {
            this.message_params.type = type;
        }
        if (isdisplayed === true || isdisplayed === false) {
            this.message_params.isdisplayed = isdisplayed;
        } else {
            this.message_params.isdisplayed = !this.message_params.isdisplayed;
        }
    }


}
