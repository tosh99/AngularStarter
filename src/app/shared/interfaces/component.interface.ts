import {Injectable} from '@angular/core';

export interface ComponentInterface {
    app_params: {
        user: {},
        isinitialised: boolean;
    };

    modal_params: {
        context: string,
        type: string,
        isdisplayed: boolean
        headertext: string,
        content: string,
        affirmtext: string,
        canceltext: string,
    };
    loader_params: {
        isdisplayed: boolean
    };
    message_params: {
        type: string,
        message: string,
        isdisplayed: boolean
    };

    metadata: {};
    coredata: any;

    loadMetaData(): void;

    loadData(): void;

    transformData(): void;

    toggleModal(event?): void;

    toggleLoader(event?): void;

    toggleMessage(event?): void;

}


@Injectable()
export class ComponentInterfaceService implements ComponentInterface {
    // UI Variables
    public app_params = {
        user: {},
        isinitialised: false
    };
    public loader_params = {
        isdisplayed: false
    };
    public modal_params = {
        context: '',
        type: '',
        headertext: '',
        content: '',
        affirmtext: 'Yes',
        canceltext: '',
        isdisplayed: false
    };
    public message_params = {
        type: 'message',
        message: '',
        isdisplayed: false
    };

    // Dropdown Variables
    public metadata: {};


    // Data Variables
    public coredata: any;

    loadMetaData() {
    };

    loadData() {
    };

    transformData() {
    };


    toggleModal(event?) {
    }

    toggleLoader(event?) {

    }

    toggleMessage(event?) {
    }
}
