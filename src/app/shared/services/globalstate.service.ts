import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable()
export class GlobalStateVariables {

    public _globalState = new BehaviorSubject(null);

    constructor() {
        this.fetchGlobalState();
    }


    // Exposed Functions --------------------------------------------------------------------- //
    public setGlobalState(value) {
        this._globalState.next(value);
        localStorage.setItem('globalState', JSON.stringify(value));
    }


    public fetchGlobalState() {
        this._globalState.next(localStorage.getItem('globalState'));
    }


}
