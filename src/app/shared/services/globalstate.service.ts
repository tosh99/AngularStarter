import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class GlobalStateVariables {

    public static _globalState = new BehaviorSubject(null);

    constructor() {
        let gbstate = localStorage.getItem('globalState');
        if (gbstate === null || gbstate === undefined) {
            gbstate = JSON.parse('{}');
        } else {
            if (typeof (gbstate) === 'string') {
                gbstate = JSON.parse(gbstate);
            }
        }

        GlobalStateVariables._globalState.next(gbstate);
    }

    // Exposed Functions --------------------------------------------------------------------- //
    public setGlobalState(key, value) {

        let temp = GlobalStateVariables._globalState.getValue();
        if (temp === null || temp === undefined) {
            temp = {};
        } else {
            if (typeof (temp) === 'string') {
                temp = JSON.parse(temp);
            }
        }
        try {
            temp[key] = value;
        } catch (e) {
            temp = {};
            temp[key] = value;

        }

        temp[key] = value;
        GlobalStateVariables._globalState.next(temp);
        localStorage.setItem('globalState', JSON.stringify(temp));
    }

    public removeGlobalState(key) {
        let temp = GlobalStateVariables._globalState.getValue();
        if (temp === null || temp === undefined) {
            temp = {};
        } else {
            if (typeof (temp) === 'string') {
                temp = JSON.parse(temp);
            }
        }
        delete temp[key];

        GlobalStateVariables._globalState.next(temp);
        localStorage.setItem('globalState', JSON.stringify(temp));


    }

    public clearGlobalState() {
        localStorage.clear();
    }

}
